class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getPerson() {
        var personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;
        return personInfo;
    }
}

let Emir = new Person("Emir", "em.peljto@gmail.com", 33);
console.log(Emir.getPerson());
module.exports = Person;