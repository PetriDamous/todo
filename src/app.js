import "./sass/style.scss";
import { setupServiceWorker } from "./js/modules/servicesWorker";
import { domContentLoaded } from "./js/modules/load";
import { notes } from "./js/modules/notes";
import { updateModal } from "./js/modules/updateModal";
import UI from "./js/classes/UserInterface";
import CreateNotes from "./js/classes/CreateNotes";
import Dropdown from "./js/classes/Dropdown";
import {
  $siteHeaderDropdownButton,
  $siteHeaderDropdownMenu,
  $siteHeaderDropdownOptions,
} from "./js/modules/elements";
import { siteHeaderActions } from "./js/actions/siteHeaderActions";

// setupServiceWorker();

const uI = new UI();

const siteHeaderDropdown = new Dropdown({
  dropdownButton: $siteHeaderDropdownButton,
  dropdownMenu: $siteHeaderDropdownMenu,
  dropdownOptions: $siteHeaderDropdownOptions,
  dropDownActions: siteHeaderActions,
});

siteHeaderDropdown.onBtnClick();
siteHeaderDropdown.addOptionsEventListeners();

const createNotes = new CreateNotes(uI);
createNotes.createNoteAction();
createNotes.closeForm();

// Keep track of closet color button
let closetColorBtn;

domContentLoaded();

notes(closetColorBtn);

// createNotesInput();

updateModal();

// window.addEventListener("resize", () => {
//   getColorCoords(closetColorBtn);
// });

// document.addEventListener("scroll", () => {
//   getColorCoords(closetColorBtn);
//   uI.closeColor();
// });
