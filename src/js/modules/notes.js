import UI from "../classes/Ui";
import Storage from "../classes/Storage";
import { $colorToolTip } from "./elements";

export const notes = (closetColorBtn) => {
  const uI = new UI();

  document.querySelector("#notes-area").addEventListener("click", (e) => {
    const elm = e.target;

    if (elm.matches(".btn-delete")) {
      Storage.removeNote(elm.closest(".card"));
      uI.displayMsg("delete", "success");
      uI.renderNotes();
      return;
    }

    if (elm.matches(".card__color img")) {
      const isColorOpen = $colorToolTip.style.display === "flex" ? true : false;

      console.log("start", closetColorBtn);

      // closetColorBtn = elm.closest(".card");
      // console.log(closetColorBtn);
      // console.log("not open", closetColorBtn);
      // uI.openColor(closetColorBtn);

      // if (closetColorBtn === closetColorBtn) {
      //     console.log("opened", closetColorBtn)
      //     closetColorBtn = elm.closest('.card__color img');
      //     uI.openColor(closetColorBtn);
      //     return;
      // }

      // if (!isColorOpen) {
      //     closetColorBtn = elm.closest('.card__color img');
      //     console.log("not open", closetColorBtn)
      //     uI.openColor(closetColorBtn);
      //     return
      // }

      // if (closetColorBtn === closetColorBtn) {
      //     if (isColorOpen) {
      //         // closetColorBtn = elm.closest('.card__color img');
      //         closetColorBtn = elm.closest('.card');
      //         console.log("not open", closetColorBtn)
      //         uI.openColor(closetColorBtn);
      //         return
      //     } else {
      //         console.log("opened", closetColorBtn)
      //         // closetColorBtn = elm.closest('.card__color img');
      //         closetColorBtn = elm.closest('.card');
      //         uI.openColor(closetColorBtn);
      //         return;
      //     }

      // }

      // if (isColorOpen) {
      //     console.log("close", closetColorBtn)
      //     uI.closeColor();
      //     return;
      // }

      return;
    }

    console.log(elm.closest(".card"));

    uI.openModal(elm.closest(".card"));
  });
};
