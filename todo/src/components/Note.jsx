const Note = ({ body, color, title }) => {
  return (
    <div className="card" data-color={color} data-id="${note.id}">
      <h3 className="card__title">{title}</h3>
      <div className="card__body">{body}</div>
      <div className="card__options">
        <div className="card__color">
          <img src="img/chromatic.png" alt="color picker" />
        </div>
        <button className="btn btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default Note;
