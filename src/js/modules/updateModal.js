import UI from "../classes/UserInterface";
import Storage from "../classes/Storage";

export const updateModal = () => {
  const uI = new UI();

  document.querySelector(".modal").addEventListener("click", (e) => {
    if (e.target.id === "close-modal") {
      e.preventDefault();
      uI.closeModal();
    }

    if (e.target.id === "submit-modal") {
      e.preventDefault();
      Storage.updateNote(e.currentTarget.dataset.id);
      uI.closeModal();
      uI.displayMsg("update", "success");
      uI.renderNotes();
    }
  });
};
