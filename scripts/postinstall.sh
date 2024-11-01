#!/bin/bash

HOOK_DIR=".git/hooks"
HOOK_PATH="$HOOK_DIR/pre-commit"
rm -f "$HOOK_PATH"
# Create hooks directory if it doesn't exist
mkdir -p "$HOOK_DIR"

# Check if pre-commit hook exists
if [ ! -f "$HOOK_PATH" ]; then
    echo "Creating pre-commit hook..."
    cat > "$HOOK_PATH" << 'EOL'
#!/bin/bash

echo "Running ESLint..."
eslint_result=0
npm run lint || eslint_result=$?

echo "Running Prettier..."
prettier_result=0
npm run prettier --check . || prettier_result=$?

echo "Running Stylelint..."
stylelint_result=0
npm run stylelint || stylelint_result=$?

if [ "$eslint_result" -ne 0 ] || [ "$prettier_result" -ne 0 ] || [ "$stylelint_result" -ne 0 ]; then
  echo "Code does not meet linting or formatting standards. Please correct the issues."
  exit 1
fi

echo "Lint and format checks passed successfully."
exit 0
EOL

    # Make the hook executable
    chmod +x "$HOOK_PATH"
    echo "Pre-commit hook created successfully"
else
    echo "Pre-commit hook already exists"
fi
