class Notes {
  constructor(title, body, id = crypto.randomUUID(), color = "default") {
    this.title = title;
    this.body = body;
    this.id = id;
    this.color = color;
  }
}

export default Notes;
