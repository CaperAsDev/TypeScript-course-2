//|-----------------------------------------------|
//|----------------<<< ENUMS >>>------------------|
//|-----------------------------------------------|

//? As I see enum is like a collection of values and its use is like if were objects using first the name of the enum and then taking one of its "properties".
//*Of course, we are in typescript so the main idea is using enum as a value assgination controler, meaning that we can only assign values defined in the enum structure we typed for a data structure.

//<Teacher said that it's a good practice to define enums and its properties in capital letters>
enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}
type Roles = 'admin' | 'seller' | 'customer';
//<Here we typed the "role" property of the User object as "ROLES" so can't assign a string, number or another type of value that is not a ROLE(enum)
type User = {
  username: string;
  role: ROLES | Roles;
};
//<I thought that the difference between using ROLE and Role would be the VS code help when assigning the value, but in both cases we get a hint when defining the value, although the enum hint is easier to take because you only have to call the enum, on the other hand with literal type we don't know what type of value is expected from us. It seems to be more differences but i hope the course approach them later.
const capyUser: User = {
  username: 'Caper',
  role: ROLES.ADMIN,
};

//|-----------------------------------------------|
//|----------------<<< Tuples >>>-----------------|
//|-----------------------------------------------|

//? Tuple is a way to define an array structure in a more specific way than just typying wich type of values receive
//*This is the common way to type an array
const anArray: number[] = [];
anArray.push(0);

//*This is the way is done with tuples: we define the type of each element in the oredered we expect it to be.
let tupleArray: [string, number, boolean];

//<We shouldn't initialize the variable just as an empty array because it expects we define the complete array at once time.
tupleArray = ['caper', 28, true];

//*Despite we have already defined the tupleArray elements, if we add with methods more elements typescript is not showing a warning
tupleArray.push(true);
tupleArray.pop();
console.log(tupleArray);

//* Also we can destructure a tuple as its an ordinary array

const [userName, age] = tupleArray;
console.log(userName, age);

//|-----------------------------------------------|
//|----------------<<< UNKNOWN >>>----------------|
//|-----------------------------------------------|

//?Unknown is a type used when we really dont know what type of value will return a function or will receive a variable.
//*At first sight, it looks like using any but the main difference is that with unknown values typescript will ask us to confirm the type of value before using it.

let unknownVar;
function returning(string: string): unknown {
  return JSON.parse(string);
}
unknownVar = returning('true');

//<"hey, you dont't know if you can do this with this variable(its type is unknown), right? Why don't you validate if it's a string before using a method over it?"
/* unknownVar.toUpperCase(); */ //!'unknownVar' is of type 'unknown'
if (typeof unknownVar === 'string') unknownVar.toUpperCase();
else {
  console.log(`it weren't a string, it is a ${typeof unknownVar}`);
}

//|-----------------------------------------------|
//|-----------------<<< NEVER >>>-----------------|
//|-----------------------------------------------|

//? Never is a type given to a function or any value which is never observed. It means that a function thows an exeption or terminates de execution of the program. Never also appears when TypeScript determines there’s nothing left in a union.

//<Note that fnAny's return is typed as void, because it has no return
const fnAny = (x: string | number) => {
  if (typeof x === 'string') {
    // do something
  } else if (typeof x === 'number') {
    // do something else
  } else {
    x; // has type 'never'!
    /* console.log(x.toUpperCase()); */ //!property 'toUpperCase' does not exist on type 'never'
  }
};
//<Note that fail's return is typed as never, because the function if called will end the program
const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'is an string';
  } else if (Array.isArray(input)) {
    return 'is an array';
  }
  return fail('maybe is an object?');
};

console.log(example('caper'));
/* console.log(example(5)); */ //!This will throw an error and stop the program
/* console.log(example(['caper', 'actus'])); */ //!This will never happend