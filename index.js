class Person {
    constructor(name, address, email, phoneNo) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phoneNo = phoneNo;
    }
    getDetails () {
        console.log(`Name: ${this.name}, Address: ${this.address}, Email: ${this.email}, Phoneno: ${this.phoneNo}`);
    }
}

let person1 = new Person('Manjusha', 'Coimbatore', 'thisismanjubrucey@gmail.com', '1234567899');
person1.getDetails();
let person2 = new Person('Guvi', 'Chennai', 'zen@guvi.in', '1234567899');
person2.getDetails();

class Uber {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice () {
        console.log(`Name: ${this.name}, and Price: Rs${this.price}`);
    }
}

let uber1 = new Uber('Test1', 250);
uber1.getPrice();
let uber2 = new Uber('Test2', 300);
uber2.getPrice();

class Movie {
    constructor(title, studio, rating='PG13') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getDetails () {
        console.log(`Title: ${this.title}, Studio: ${this.studio} and Rating: ${this.rating}`);
    }
}
let movie = new Movie('Casino Royale', 'Eon Productions');
movie.getDetails();

class Circle {
    constructor(title, studio, rating='PG13') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getDetails () {
        console.log(`Title: ${this.title}, Studio: ${this.studio} and Rating: ${this.rating}`);
    }
}
let circle = new Circle('Casino Royale', 'Eon Productions');
circle.getDetails();
