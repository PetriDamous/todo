import { $createNoteForm } from "../modules/elements";
import { $siteHeaderDropdownMenu } from "../modules/elements";

const openCreateNoteForm = (e) => {
  $siteHeaderDropdownMenu.classList.add("hide");
  $createNoteForm.classList.add("open-modal");
};

export const siteHeaderActions = [openCreateNoteForm];
