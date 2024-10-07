// let 이름 : string[]  = ['kim', 'park];
// let 이름 : {name? : string} = { name : 'kim' }
// let 이름 :string | number = 'lee'; 
type MyType = string | number;// 타입은 변수에 담아 쓸 수 있음 
let Name2 : MyType = 'lee'; //변수설정(string만들어올수있음)
let Name : string = 'lee'; //변수설정(string만들어올수있음)
let age :number = 50;
let areumarry :boolean = false;
 
function example1(x : number) :number {
    return x * 2
}

// 사실 타입지정안해도 자동으로 해줌 (타입지정 문법 생력가능)

//배열
type Member2 = [number, boolean];
let john2:Member2 = [123, true];

//오브젝트 
let Member3 :{ member1 : string , member2 : string} = { member1 : 'kim' , member2 : 'lee'}

type Member = {
    [key  : string] : string, // 글자로 된 모든 object속성의 타입은 : string 
}
let john : Member = { name : 'kim'}

class User {
    name : string; 
    constructor(name){
        this.name = name;
    }
}

let project : {member :string[], days :number, started :boolean } = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}