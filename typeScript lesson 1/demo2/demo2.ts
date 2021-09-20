// class
interface Client <T>{
    id: T; //undefined
    login: string;
}
let clent1: Client<number> = {id: 1234, login:'password'}
let clent2: Client<string> = {id: '12dfgfdgdf', login:'password'}