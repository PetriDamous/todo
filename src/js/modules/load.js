import UI from "../classes/ui";

export const domContentLoaded = () => {
  const uI = new UI();

  document.addEventListener("DOMContentLoaded", () => {
    uI.renderNotes();
  });
};
