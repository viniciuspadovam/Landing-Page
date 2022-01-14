// DropDown Menu
let linkGroup = document.getElementById('link-group');
let isActive = false;
let dropdownIcon = document.getElementById('dropdown-icon');

dropdownIcon.addEventListener('click', () => {
    if (!isActive) {
        linkGroup.style.display = 'block';
        isActive = true;
    } else {
        linkGroup.style.display = 'none';
        isActive = false;
    }
});
