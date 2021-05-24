class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.limit = 100;
    this.comment = [];
  }
  consumeCO2(action) {
    switch (action) {
      case "driving car":
        this.limit -= 50;
        console.log(`This is your actual limit ${this.limit}`);
        break;
      case "ride a bike":
        this.limit -= 1;
        console.log(`This is your actual limit ${this.limit}`);
        break;
      case "get a train":
        this.limit -= 10;
        console.log(`This is your actual limit ${this.limit}`);
        break;
    }
  }

  commentAdd(person, text) {
    this.comment.push(text);
    console.log(`${person} made ${this.comment.length} times`);
  }
}
const ahmet = new User("ahmet", "ahmet@ahmet.de");
ahmet.consumeCO2("driving car");
console.log(ahmet);
