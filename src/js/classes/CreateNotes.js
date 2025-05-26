import {
  $formMainTitle,
  $formMainBody,
  $createNoteForm,
  $creatNotesCloseBtn,
} from "../modules/elements";
import Notes from "./Notes";
import { noteValidation } from "../utilis/utilis";
import Storage from "./Storage";

class CreateNotes {
  constructor(uI) {
    this.$formMainTitle = $formMainTitle;
    this.$formMainBody = $formMainBody;
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

      if (noteValidation($formMainBody.value)) {
        const note = new Notes($formMainTitle.value, $formMainBody.value);
        Storage.addNote(note);
        this.uI.clearForm($formMainTitle, $formMainBody);
        this.uI.displayMsg("add", "success");
        note.renderNotes();
        this.createNoteForm.classList.remove("open-modal");
      } else {
        this.uI.displayMsg("validation", "danger");
      }
    }
  };
}

export default CreateNotes;
