class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.target = 1000;
  }
  get footPrint() {
    return this.footPrintCalc();
  }

  footPrintCalc(mobility) {
    return this.target - mobility;
  }
}

module.exports = User;
