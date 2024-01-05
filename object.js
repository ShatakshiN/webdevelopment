//creating obj using a obj literal 

/* const people = {
    name:"ritisha", 
    age:25,
    hobby:"singing"
} */


//creating obj using constructor

/* function us(name, className, rollno){
    this.name = name;
    this.className = className;
    this.rollno = rollno

}

let person1 = new us('ritika',25,122);

console.log(person1) */


//creating a class in js

/* class School {
    constructor(name, rollno, marks){
        this,name = name;
        this.rollno = rollno;
        this.marks = marks;
    }

    isValid(){
        if (this.marks >= 12){
            return 'Valid';
        }
        return 'INvalid';


    }
}

let student1 = new School('nisha',12,13);
console.log(student1.isValid());
 */


//inheritance in js of obj 


class children {

    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    isAnAdult(){
        if(this.age <18){
            return false;
        }
        return true;
    }
}

class School extends children{
    constructor(name,age,address ,rollno){
        super(name,age, address);
        this.rollno = rollno;  

    }

    isPresent(){
        console.log('present');
    }


}

let student1 = new School('natasha', 19, "h-39", 12223)
student1.isPresent();
console.log(student1.isAnAdult());