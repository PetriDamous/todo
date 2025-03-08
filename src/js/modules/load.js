import UI from "../classes/UserInterface";

export const domContentLoaded = () => {
  const uI = new UI();

  document.addEventListener("DOMContentLoaded", () => {
    uI.renderNotes();
  });
};
