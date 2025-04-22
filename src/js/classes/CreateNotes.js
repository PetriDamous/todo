import {
  $title,
  $body,
  $createNoteForm,
  $creatNotesCloseBtn,
} from "../modules/elements";
import Notes from "./Notes";
import { noteValidation } from "../utilis/utilis";
import Storage from "./Storage";

class CreateNotes {
  constructor(uI) {
    this.$title = $title;
    this.$body = $body;
    this.createNoteForm = $createNoteForm;
    this.close = $creatNotesCloseBtn;
    this.uI = uI;
  }

  closeForm() {
    this.close.addEventListener("click", () => {
      this.createNoteForm.classList.remove("open-modal");
    });
  }

  createNoteAction() {
    this.createNoteForm.addEventListener("click", this.createNoteEvent);
  }

  createNoteEvent = (e) => {
    if (e.target.id === "submit-main") {
      e.preventDefault();

      if (noteValidation($body.value)) {
        const note = new Notes($title.value, $body.value);
        Storage.addNote(note);
        this.uI.clearForm($title, $body);
        this.uI.displayMsg("add", "success");
        this.uI.renderNotes();
        this.createNoteForm.classList.remove("open-modal");
      } else {
        this.uI.displayMsg("validation", "danger");
      }
    }
  };
}

export default CreateNotes;
