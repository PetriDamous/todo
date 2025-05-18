class Dropdown {
  constructor({
    dropdownButton,
    dropdownMenu,
    dropdownOptions,
    dropDownActions,
  }) {
    this.dropdownButton = dropdownButton;
    this.dropdownMenu = dropdownMenu;
    this.dropdownOptions = dropdownOptions;
    this.dropDownActions = dropDownActions;
  }

  addOptionsEventListeners = () => {
    this.dropDownActions.forEach((action, idx) => {
      this.dropdownOptions.item(idx).addEventListener("click", action);
    });
  };

  onBtnClick = () => {
    this.dropdownButton.addEventListener("click", this.openCloseMenu);
  };

  openCloseMenu = (e) => {
    this.dropdownMenu.classList.toggle("hide");
  };
}

export default Dropdown;
