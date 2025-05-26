import Notes from "../classes/Notes";

export const domContentLoaded = () => {
  const notesArea = new Notes();

  document.addEventListener("DOMContentLoaded", () => {
    notesArea.renderNotes();
  });
};
