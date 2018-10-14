//@flow
export class Hello {
  name: number;
  constructor(name:string) {
    this.name = name;
    this.say();
  }

  say():void {
    console.log(`Hello ${this.name} World!`);
  }
}

export default new Hello('Nekomimi');
