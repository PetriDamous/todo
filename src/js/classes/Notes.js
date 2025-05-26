import {
  $closeNoteButton,
  $formModal,
  $formModalBody,
  $formModalTitle,
  $notesArea,
  $noteUpdateButton,
} from "../modules/elements";
import Storage from "./Storage";
import UI from "./UserInterface";

class Notes {
  constructor(title, body, id = crypto.randomUUID(), color = "default") {
    this.title = title;
    this.body = body;
    this.id = id;
    this.color = color;

    this.$modal = $formModal;
    this.$modelTitle = $formModalTitle;
    this.$modelBody = $formModalBody;
    this.uI = new UI();
  }

  closeNote() {
    $closeNoteButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.removeOpenClass();
    });
  }

  openNote() {
    $notesArea.addEventListener("click", (e) => {
      const elm = e.target;

      const {
        dataset: { id },
      } = elm.closest(".card");

      const notes = Storage.getNotes();
      const note = notes.find((note) => note.id === id);

      const { title, body } = note;

      this.$modal.dataset.id = id;
      this.$modelTitle.value = title;
      this.$modelBody.value = body;

      this.$modal.classList.add("open-modal");
    });
  }

  removeOpenClass() {
    this.$modal.classList.remove("open-modal");
  }

  updateNote() {
    $noteUpdateButton.addEventListener("click", (e) => {
      e.preventDefault();
      Storage.updateNote(e.currentTarget.form.dataset.id);
      this.removeOpenClass();
      this.uI.displayMsg("update", "success");
      this.uI.renderNotes();
    });
  }
}

export default Notes;
