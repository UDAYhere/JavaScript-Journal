class Parent{
    constructor(name,age){
        this.name=name;
        this.age=age;}
    
    talk(){
        console.log(`hi, i am ${this.name}`)
    }
}

class Student extends Parent{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
}

class Teacher extends Parent{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}