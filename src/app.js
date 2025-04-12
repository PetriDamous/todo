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
} from "./js/modules/elements";

// setupServiceWorker();

const uI = new UI();

const siteHeaderDropdown = new Dropdown({
  dropdownButton: $siteHeaderDropdownButton,
  dropdownMenu: $siteHeaderDropdownMenu,
});

siteHeaderDropdown.onBtnClick();

const createNotes = new CreateNotes(uI);
createNotes.createNoteAction();

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
