class UserAccount {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  logDatails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class CharAccount extends UserAccount {
  nick: string
  level: number

  constructor(name: string, age: number, nick: string, level: number) {
    super(name, age)
    this.nick = nick
    this.level = level
  }
  // acessors
  get getLevel() {
    console.log('*** GET ***')
    return this.level
  }

  set setLevel(level: number) {
    this.level = level
  }

  logCharDetails(): void {
    console.log(
      `The player ${this.name} has the char ${this.nick} at level ${this.level}`
    )
  }
}

const will = new UserAccount('will', 31)

console.log(will)
console.log(will.name)
will.logDatails()

const john = new CharAccount('John', 45, 'johnmaster', 80)
console.log(john)
console.log(john.level)
john.logDatails()
john.logCharDetails()
john.setLevel = 499
console.log(john.getLevel)
