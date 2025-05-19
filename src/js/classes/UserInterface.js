import chromatic from "../../assets/chromatic.png";
import Storage from "./Storage";
import { getColorCoords } from "../utilis/utilis";
import {
  $formModal,
  $formModalBody,
  $formModalTitle,
} from "../modules/elements";
class UI {
  constructor() {
    this.$notesArea = document.querySelector("#notes-area");
    this.$msg = document.querySelector("#message");
    this.$formTitle = document.querySelector("#form-main #title");
    this.$colorToolTip = document.querySelector(".color-tooltip");

    this.$modal = $formModal;
    this.$modelTitle = $formModalTitle;
    this.$modelBody = $formModalBody;
  }

  renderNotes() {
    this.closeColor();

    const notes = Storage.getNotes();

    this.$notesArea.innerHTML = notes
      .map(
        (note) =>
          `<div class="card" data-color="${note.color}" data-id="${note.id}">
                <h3 class="card__title">${note.title}</h3>
                <div class="card__body">${note.body}</div>
                <div class="card__options">
                    <div class="card__color">
                        <img src=${chromatic} alt="color picker">
                    </div>
                    <button class="btn btn-delete">Delete</button>
                </div>
            </div>`
      )
      .join("");
  }

  displayMsg(action, status) {
    switch (action) {
      case "add":
        this.$msg.textContent = "Note added.";
        break;
      case "delete":
        this.$msg.textContent = "Note deleted";
        break;
      case "update":
        this.$msg.textContent = "Note updated";
        break;
      case "validation":
        this.$msg.textContent = "Please write a note.";
        break;
    }

    if (status === "danger") {
      this.$msg.classList.remove("theme-success");
      this.$msg.classList.add("theme-danger");
    } else {
      this.$msg.classList.remove("theme-danger");
      this.$msg.classList.add("theme-success");
    }

    this.$msg.style.display = "block";

    setTimeout(() => {
      this.$msg.style.display = "none";
    }, 3000);
  }

  clearForm(title, body) {
    title.value = "";
    body.value = "";
  }

  openColor(closetColorBtn) {
    this.closeColor();
    getColorCoords(closetColorBtn);

    this.$colorToolTip.style.display = "flex";
  }

  closeColor() {
    this.$colorToolTip.style.display = "none";
  }

  openModal({ dataset: { id } }) {
    this.closeColor();
    const notes = Storage.getNotes();
    const note = notes.find((note) => note.id === id);

    const { title, body } = note;

    this.$modal.dataset.id = id;
    this.$modelTitle.value = title;
    this.$modelBody.value = body;

    this.$modal.classList.add("open-modal");
  }

  closeModal() {
    this.$modal.classList.remove("open-modal");
  }
}

export default UI;
