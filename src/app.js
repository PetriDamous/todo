import { setupServiceWorker } from "./js/modules/servicesWorker";
import { domContentLoaded } from "./js/modules/load";
import { notes } from "./js/modules/notes";
import { createNotesInput } from "./js/modules/createNoteInput";
import { updateModal } from "./js/modules/updateModal";

setupServiceWorker();

// Keep track of closet color button
let closetColorBtn;

domContentLoaded();

notes(closetColorBtn);

createNotesInput();

updateModal();

// window.addEventListener("resize", () => {
//   getColorCoords(closetColorBtn);
// });

// document.addEventListener("scroll", () => {
//   getColorCoords(closetColorBtn);
//   uI.closeColor();
// });
