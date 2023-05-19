//|-----------------------------------------------|
//|----<<< DEFAULT AND OPTIONAL PARAMETERS >>>----|
//|-----------------------------------------------|

//?This is not something not only available with typescript, but is good to know or refresh what are the optional parameters and the default parameters.

const buildMyObj = (
  name: string,
  age: number,
  suscribed: boolean = false, //* Asigning a value to a parameter will set it as default value in case we don't send it.
  married?: boolean //*Use "?" before typing a parameter if you want it to be optional
) => {
  return {
    name,
    age,
    suscribed,
    married,
  };
};
//<So when using buildMyObj we have 2 parameters required, one parameter with a default value and one parameter optional.

const obj1 = buildMyObj('caper', 28);
const obj2 = buildMyObj('Actus', 29, true);
const obj3 = buildMyObj('Capipop', 30, false, true);
//<Don't forget that if you want to send the last parameter(the optional) you'll have to send also the third parameter(The one with default value)
//!The parameters order is important with this method, later we will see how to send parameters regardless of order and type.

//|-----------------------------------------------|
//|-----------<<< REST PARAMETERS >>>-------------|
//|-----------------------------------------------|
//? Usually rest parameters are use when don't know how many parameters will be sent to a function
//*In this example we can say it only requires 1 argument but to keep it simple lets assume that always receive more than 1.
//<I have toughts about this rest parameters thing and is that i wouldn't use it if i just passed a pre-arranged array, so it works when i want to pass as many parameters as the situation needs without a previous filter or validation

function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
const a = multiply(10, 1, 2, 3, 4); //? 'a' gets value [10, 20, 30, 40]
//< In the previous example at least for me i would be more readable if i pass the number to multiply for first and then and array of numbers i want to get multiplied:
function multiplyV2(n: number, m: number[]) {
  return m.map((x) => n * x);
}

const b = multiplyV2(5, [1,2,3,4,5,6]);//< It seems better to me if i arange beforehand the data and then i pass the data to the function Keeping in mind that usually the "rest parameters" will be organized in a unique array.


type Teacher = {
  name: string;
  class: string;
};
type Class = {
  teacher: Teacher,
  representative: object,
  students: object[];
}
type Student = {
  name: string,
  id: number,
  roll: ("student" | "class representative")
}
function list(
  teacher: Teacher,
  clasRepresentative: Student,
  ...student: Student[]
) {
  const allStudents = [clasRepresentative, ...student]
  const myClass: Class= {
    teacher,
    representative: clasRepresentative,
    students: allStudents
  };
  return myClass
}
const artTeacher: Teacher = {name: 'Caper', class: 'Visual arts'}
const representative: Student = {name: 'Capipop', id: 1, roll: "class representative"};
const student1: Student = {name: 'Capitolio', id: 2, roll: "student"};
const student2: Student = {name: 'Capernico', id: 3, roll: "student"};

const artClass = list(artTeacher, representative, student1, student2)
console.log(artClass);

//|-----------------------------------------------|
//|--------------<<< OVERLOAD >>>-----------------|
//|-----------------------------------------------|

//? We use overload to tell TypeScript different situations we may have in our code respecting relation between type of argument vs type of return. So if we have some variants just give TS the type of return that is expected when the type of argument is given.

//<Good practices:

//<- If you have an overload with 'unknown' or 'any' place them at the end of overloads:⬇️
//<- Why?: TypeScript chooses the first matching overload when resolving function calls. When an earlier overload is “more general” than a later one, the later one is effectively hidden and cannot be called.

//<- Use overloads just when is necessary, if your types don't chage much maybe overloads are not necessary.

function parseStr(input: string): string[];//*if the argument is string return a string[]
function parseStr(input: string[]): string;//* if the argument is string[] return a string
function parseStr(input: number): boolean;//* if the argument is number return a boolean

function parseStr ( input: unknown): unknown{
  if(Array.isArray(input)){
    return input.join('')
  }else if(typeof input === 'string'){
    return input.split('');
  }else if(typeof input === 'number'){
    return true;
  }
}
//<So now here we have the vs Code hints thanks to the overload defined above
const rtaStr = parseStr(['C','a','p','e','r','a','c','t','u','s']);
console.log(rtaStr);

const rtaArray = parseStr("Caperactus");
console.log(rtaArray);

const rtaBoolean = parseStr(1995);
console.log(rtaBoolean);
