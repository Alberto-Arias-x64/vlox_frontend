/*////////// Session 1 //////////*/

/* Primitives */
let miString: string = 'pussy'
let miNumber: number = 0
let miBoolean: boolean = false

/* Array */
let arrNumber: number[] = [1, 2, 3]
let arrNumberOther: Array<number> = [1, 2, 3]

/* Tuple */
let tuple: [string, number, boolean] = ['', 0, false]

/* Inf */
let genericType = ''

/* Union types */
let union: string | number | undefined

/*////////// Session 2 //////////*/

/* enums */
enum Roles {
    User,
    Admin,
    SuperAdmin
}

console.info(Roles.User) // 0
console.info(Roles.Admin) // 1
console.info(Roles.SuperAdmin) // 2

/* Object */
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
}

console.info(roles.User) // 0
console.info(roles.Admin) // 1
console.info(roles.SuperAdmin) // 2

/*////////// Session 3 //////////*/

/* Type assertion */
let chanel: any = 'pussy'
let chanelString = <string>chanel
let chanelStringOther = chanel as string

const myDiv = document.getElementById('main') as HTMLElement
const myCanvas = document.getElementById('canvas') as HTMLCanvasElement
const mySecondCanvas = <HTMLCanvasElement>document.getElementById('canvas')

/*////////// Session 4 //////////*/

function salute(): void { console.log('hello word') }

function greet(element: string | number): string[] { return [`hello pussy ${element}`] }
console.log(greet('cat')) // hello pussy cat
console.log(greet(0)) // hello pussy 0

/*////////// Session 5 //////////*/

// Interface: solo exixte en tiempo de compilacion/ solo se usa para verificar tipos
// Clases: exixte en ejecucion/ sirve para inicializat tipos e implementar metodos/ crea instacias

/*////////// Session 6 //////////*/

/* Interface - Mold - Pattern */
interface Book {
    id: number,
    title: string,
    author: string,
    coAuthor?: string, //conditional
    isLoan?: (id: number) => void // function
}

const book: Book = {
    id: 1,
    title: '',
    author: '',
    isLoan: (id) => { id + 1 }
}

function createBook(book: Book): Book { return book }
createBook(book)

const enum Language {
    Javascript,
    Typescript
}

interface TechBook extends Book {
    language: Language
}

const cleanCode: TechBook = {
    id: 1,
    title: '',
    author: '',
    language: Language.Typescript
}

/*////////// Session 7 //////////*/

class Pussy {
    deep: number | undefined
    color: string
    constructor(kq: string) { this.color = kq }
    showInfo(): any[] { return [this.color] }
}
const cat = new Pussy('Black')
cat.showInfo()

// Public
// Private
// Protected

class Dick {
    size: number | undefined
    color: string | undefined
    constructor(private readonly Virgin: boolean) { } // auto asignacion + solo lectura
    showInfo(): boolean { return this.Virgin }
}


class Sex extends Dick {
    public zone = 'USA'
    private city = 'Bannanera'
    protected country = 'Hungyzuela'
    constructor(private erect: boolean) {
        super(true)
    }
    greet() { [this.city, this.erect] }
}

class rareWare extends Sex {
    constructor() {
        super(false)
    }
    work() {
        this.zone
        // this.city NO WORKS
        this.country // only asses when extend whit other class
    }
}

/*////////// Session 7 //////////*/

//Name spaces

namespace Util {
    export namespace Taxes {
        export function calculateIVA(price: number): number {
            return price * 1.21
        }
        export function calculateLateIVA(price: number): number {
            return price * 1.3
        }
    }
}

/// <reference path="practice.ts">
let utils = Util.Taxes
console.log(utils.calculateIVA(150))
console.log(utils.calculateLateIVA(200))

/*////////// Session 8 //////////*/

//import{PI as pi} from "./module"
//import * as SIU from "./module"
// SIU.PI
//export{}

//tsconfig.json 
/* 
    target: es2016
    moduleResolution: "node"
    outDir: "./dist"
 */

/*////////// Session 9 //////////*/

type dataType = Dick | Pussy

/* generic */
class Alfred<T> {           //extend (Dick | Pussy)
    Heavy:T | undefined
    constructor() {}
}

const major = new Alfred<string>
major.Heavy = 'road'
console.log(major.Heavy)
