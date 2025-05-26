import {
  $formModal,
  $formModalBody,
  $formModalTitle,
  $notesArea,
} from "../modules/elements";
import Storage from "./Storage";

class Notes {
  constructor(title, body, id = crypto.randomUUID(), color = "default") {
    this.title = title;
    this.body = body;
    this.id = id;
    this.color = color;

    this.$modal = $formModal;
    this.$modelTitle = $formModalTitle;
    this.$modelBody = $formModalBody;
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
}

export default Notes;
