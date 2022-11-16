export class Participant {
  constructor(id) {
    this.id = id;
  }

  set Name(name) {
    this.name = name;
  }

  set ImgPath(path) {
    this.path = path
  }

  get Name() {
    return this.name;
  }

  get ImgPath() {
    return this.path
  }
}
