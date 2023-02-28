//Класси потрібні щоб перевикористовувати та скоротити код
// Класс це абстрактний прототип за допомогою чого створюються екземпляри классів
//PageObject - pattern по якому організовується код у фреймворках, суть - ми створюємо обєкт сторінки і кожна сторінка має статичні(локатори елементів)  дані та дії(дії над цими елементами)

class Parent {
    constructor(firstName, age, lastName) {
        this.firstName = firstName
        this.age = age
        this.lastName = 'Lazarenko'

    }
    greeting() {
        console.log('Hey')
    }

    tellName() {
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    }
    tellAge() {
        console.log(`I'm ${this.age} old`)
    }
    //Перевірка на належність до екземпляру классу
    tellJobTitle() {
        if(this instanceof Child){
            console.log(`I don't have job title`)
        }  else { 
            this.job = "QA"
            console.log(`My job title is ${this.job}`)
    }
    }
}

class Child extends Parent{
    greeting() {
        console.log(`Hey! This is new greeting`)
    }
    goToSchool() {
        console.log(`I like go to school`)
    }
}

const parent = new Parent('Stacey', 32);
const child = new Child('Angel', 5);

parent.greeting()
parent.tellAge()
parent.tellName()
parent.tellJobTitle()


child.greeting()
child.tellAge()
child.tellName()
child.goToSchool()
child.tellJobTitle()