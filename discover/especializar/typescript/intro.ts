// js
// function sum(a, b) {
//     return a + b;
// }

// mudar alguma regra: tsconfig.json

// tipagem explicita do tipo
function sum(a: number, b: number) {
    return a + b;
}

//sum(3, '2'); // erro, nao aceita string

/***************************/

// se for null imprime 'usuario padrão'
// 'any' aceita qualquer coisa
// user pode ser string OU null. (union / pipe)
function showTicket(user: string | null, ticket: number) {
    console.log(
        `Olá ${user ?? "Usuario padrão"}, seu número de ticket é ${ticket}`
    );
}

showTicket("João", 12);
showTicket(null, 33);

/***************************/

let userName: string = "Maria";
let userState = "São Paulo"; // inferência de tipos, pois o valor foi uma string
//userState = 10; - erro

/***************************/

// tipos:
// boolean, number, string, array, object, tuple, enum, void, any...

//array
let numbers: number[];
numbers = [1, 2, 3, 5];

// tuple
let employee: { name: string; id: number };
employee = { name: "Pedro", id: 34 };
employee = { name: "Maria", id: 77 };

// funcao sem retorno
function showMessages(message: string): void {
    console.log(message);
}

// funcao com retorno
function showNumber(numero: number): string {
    return "retorno";
}

console.log(showNumber(12));

/***************************/

// reaproveitamento de tipagem
type IdType = string | number | undefined;

let userId: IdType;
let admType: IdType;
admType = 10;

/***************************/

// type assertions
type UserResponse = {
    uid: number;
    name: string;
    avatar: string;
};

// o tipo do userResponse é o tipo UserResponse
let userResponse = {} as UserResponse;
//userResponse.avatar

// object
type Point = {
    x: number;
    y: number;
};

function printCoords(points: Point) {
    console.log(`Eixo X: ${points.x}. Eixo Y: ${points.y}`);
}

printCoords({ x: 10, y: 34 });

/***************************/

type User = {
    name: string;
    email: string;
    age?: number; // opcional
    favorits: [post_name: string, likes: number, moment: string];
};

const newUser: User = {
    name: "João",
    email: "joao@email.com",
    favorits: [
        "Partiu, viagem!",
        12,
        new Date().toLocaleDateString("pt-br", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }),
    ],
};

console.log(newUser);

/***************************/

type Player = {
    id: number;
    name: string;
};

type Char = {
    nickname: string;
    level: number;
};

/***************************/

// intersecção de tipos // uniao de tipos
type PlayerInfo = Player & Char;

let info: PlayerInfo = {
    id: 34,
    name: "Pedro",
    nickname: "pedraogamer",
    level: 345,
};

/***************************/

//interface
interface Account {
    id: number;
    name: string;
}

interface Plus {
    vip: string;
}

interface FullAccount extends Account, Plus {}

let userWithFullAccount: FullAccount = {
    id: 46,
    name: "James",
    vip: "sim",
};

/***************************/
