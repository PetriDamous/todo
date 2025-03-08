import UI from "../classes/Ui";

export const domContentLoaded = () => {
  const uI = new UI();

  document.addEventListener("DOMContentLoaded", () => {
    uI.renderNotes();
  });
};
