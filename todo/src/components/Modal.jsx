const Modal = () => {
  return (
    <div className="modal" data-id="">
      <form id="form-modal" className="form">
        <div className="container">
          <input id="title" type="text" placeholder="Title" />
          <input id="body" type="text" placeholder="Take a note..." />
          <div className="form__buttons m-sm-space">
            <submit id="submit-modal" className="btn">
              Submit
            </submit>
            <button id="close-modal" className="btn">
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
