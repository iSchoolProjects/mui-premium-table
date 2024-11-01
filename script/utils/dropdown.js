export function createDropdown() {
  const select = document.createElement('select');
  select.classList.add('select');

  const options = [
    {value: 'unsort', text: 'Unsort'},
    {value: 'sort_asc', text: 'Sort by ASC'},
    {value: 'sort_desc', text: 'Sort by DESC'},
    {value: 'filter', text: 'Filter'},
    {value: 'hide', text: 'Hide'},
    {value: 'show_columns', text: 'Show Columns'},
    {value: 'group_by_code', text: 'Group by Code', class: 'group-by-code-border'},
    {value: 'pin_left', text: 'Pin to Left'},
    {value: 'pin_right', text: 'Pin to Right'},
  ];

  options.forEach((option) => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.text;

    if (option.class) {
      opt.className = option.class;
    }

    select.appendChild(opt);
  });

  const output = document.createElement('div');
  output.appendChild(select);
  document.body.appendChild(output);
}

document.addEventListener('DOMContentLoaded', createDropdown);
