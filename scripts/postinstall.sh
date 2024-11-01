#!/bin/bash

HOOK_DIR=".git/hooks"
HOOK_PATH="$HOOK_DIR/pre-commit"

# Create hooks directory if it doesn't exist
mkdir -p "$HOOK_DIR"

# Check if pre-commit hook exists
if [ ! -f "$HOOK_PATH" ]; then
    echo "Creating pre-commit hook..."
    cat > "$HOOK_PATH" << 'EOL'
#!/bin/bash

# Run your pre-commit checks here
npm run lint
npm run format
npm run stylelint

# Get the exit code
exit_code=$?

# Exit with the combined status
exit $exit_code
EOL

    # Make the hook executable
    chmod +x "$HOOK_PATH"
    echo "Pre-commit hook created successfully"
else
    echo "Pre-commit hook already exists"
fi
