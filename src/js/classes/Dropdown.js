class Dropdown {
  constructor({ dropdownButton, dropdownMenu }) {
    this.dropdownButton = dropdownButton;
    this.dropdownMenu = dropdownMenu;
  }

  onBtnClick = () => {
    this.dropdownButton.addEventListener("click", this.openCloseMenu);
  };

  openCloseMenu = (e) => {
    this.dropdownMenu.classList.toggle("hide");
  };
}

export default Dropdown;
