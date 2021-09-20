import {Post} from "./Post";

// let post1: Post = {}

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"
//     }
// },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
// }
// }

interface IGeo {
    lat: string;
    lng: string;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

    interface ICompany {
        name: string;
        catchPhrase: string;
        bs: string;
}

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: IAddress;
    company: ICompany;
}

// type Mytype = string;

let user:IUser = {
    id:43,
    name: 'Roman',
    username: 'Datsko',
    email: 'romandatsko89@gmail.com',
    phone: '+380979795728',
    website: 'www.doctorforest.com.ua',
    company: {
        name: 'Doctor Forest',
        catchPhrase: 'Save forest',
        bs: 'Never give up'},
    address:{
        city: 'Lviv',
        street: 'Vilde',
        suite: '12',
        zipcode: '79014',
        geo:{
            lat: '-37.3159',
            lng: '81.1496'
        }
    }
}