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
}

export default UI;
