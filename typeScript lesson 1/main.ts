// function foo(x:boolean) {
//     console.log(x);
//     return 'foobar';
// }
// foo('str');
// foo(100);
// foo({name: 'Roman'});
// foo(true);
// foo({isIs:true});
// foo(true)
// function foo(a: number): number {
//     return a;
// }


// function foo(a:{name:string, age: number, skills: string[], status : boolean}){
// }
// foo({name:'Roman', age:32, skills:['', ''],status: false});
// foo({name:'Roman', age:32, skills:['', ''],status: false});
// foo({name:'Roman', age:32, skills:['', ''],status: false});
// foo({name:'Roman', age:32, skills:['', ''],status: false});
// foo({name:'Roman', age:32, skills:['', ''],status: false});


// class User {
//     name: string;
//     age: number;
    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }
//     greeting() {
//         return `hello my name is ${this.name}`
//     }
// }
//
// function foo(a: User) {
//
// }
//
// let user = new User();
// user.age = 32;
// user.name = 'Roman';
// foo(user);
// foo({name:'Roman', age: 32
// , greeting(): string {
//     return 'Datsko'
// }
// });

// interface IUser {
//     name: string;
//     age: number;
//     greeting?(a: string): string;
// }
//
// function bar(b: IUser) {
//
// }
// let  iUser = new IUser
// bar({name: 'Vova', age: 34})
// bar({
//     name: 'Vova', age: 34, greeting: (a:string): string => {
//     return 'Hello';
//     }
// });
//
// class X implements IUser{
//
//     ownXprop1: string;
//     ownXprop2: string[];
//     age: number;
//     name: string;
//
// }
// let x = new X();
// let iUsers:IUser[] = [
//     x,
//     {name: 'Vova', age: 34, greeting: (a: string): string => {return 'Hello';}}
// ]
// bar(new X());
//
//
//

class User {
    private _name: string;
    private _age: number;


    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    greeting() {
        return `hello my name is ${this._name}`
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value > 0){
            this._age = value;
        }
    }
}

function foo(a: User) {

}

function foobar(user: User) {
    user.greeting();
}

let user1 = new User('Vova', 34);
foobar(user1);



let user = new User('Roman', 32);
// user.age = 32;
// user.name = 'Roman';
user.age = 18;
console.log(user.age);
foo(user);