const MainForm = () => {
  return (
    <form id="form-main" className="form">
      <div className="container">
        <input id="title" type="text" placeholder="Title" />
        <input id="body" type="text" placeholder="Take a note..." required />
        <div id="form-buttons-main" className="form__buttons m-sm-space">
          <submit id="submit-main" className="btn">
            Submit
          </submit>
          <button id="close-main" className="btn">
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default MainForm;
