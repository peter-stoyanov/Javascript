
//throw 5;
//throw new Error("error message");

class StudentNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

throw new StudentNotFoundError("student error");
