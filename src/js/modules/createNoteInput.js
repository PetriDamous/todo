import Notes from "../classes/Notes";
import { $title, $body } from "./elements";
import { noteValidation } from "../utilis/utilis";
import UI from "../classes/UserInterface";
import Storage from "../classes/Storage";

export const createNotesInput = () => {
  const uI = new UI();

  document.querySelector("#form-main").addEventListener("click", (e) => {
    if (e.target.id === "body") {
      uI.openForm();
    }

    if (e.target.id === "close-main") {
      e.preventDefault();
      uI.closeForm();
    }

    if (e.target.id === "submit-main") {
      e.preventDefault();

      if (noteValidation($body.value)) {
        const note = new Notes($title.value, $body.value);
        Storage.addNote(note);
        uI.clearForm($title, $body);
        uI.displayMsg("add", "success");
        uI.renderNotes();
      } else {
        uI.displayMsg("validation", "danger");
      }
    }
  });
};
