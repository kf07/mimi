export class Hello {
  constructor(name) {
    this.say(name);
  }

  say() {
    console.log(`Hello ${this.name} World!`);
  }
}

export default new Hello('Nekomimi');
