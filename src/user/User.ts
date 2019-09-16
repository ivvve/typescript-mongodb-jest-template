export class User {
    static ADULT_AGE: number = 19;

    private firstName: string;
    private lastName: string;
    private age: number;
    
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    isAdult() {
        return this.age < User.ADULT_AGE;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
