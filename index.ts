// let 이름 : string[]  = ['kim', 'park];
// let 이름 : {name? : string} = { name : 'kim' }
// let 이름 :string | number = 'lee'; 
type MyType = string | number;// 타입은 변수에 담아 쓸 수 있음 
let Name2 : MyType = 'lee'; //변수설정(string만들어올수있음)
let Name : string = 'lee'; //변수설정(string만들어올수있음)

function example1(x : number) :number {
    return x * 2
}

//type Member = [number, boolean];
//let john:Member = [123, true];

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