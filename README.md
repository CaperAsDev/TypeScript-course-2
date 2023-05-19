# 🥸TypeScript-course-2

Well this course is the next part of the [typeScript-101](https://github.com/Caperactus/TypeScript-101) course so i recommend seeing what's there before reading this one.

Quick introduction about what we have to set before starting:
- Create your git repository.
- Configure the *.gitignore* file.
- Initialize an npm project: **npm init**.
- Install TypeScript: **npm install -D typeScript**.
- Initialize typescript: **npx tsc init**
- Configure the *tsconfig.json* if needed.
- install [ts-node](https://www.npmjs.com/package/ts-node#installation) **npm install -D ts-node**

Now, **ts-node** let us execute our **.ts** files from the terminal with node, in the previous course if we wanted to see the output of our code, we would have to compile with tsc and with node execute the **.js** file to see the output. So this package remove the compiling step and just execute .ts files for us.
- To use ts-node: **npx ts-node "your file path"**, for example in my case: npx ts-node src/[advanced-types.ts](./src/advanced-types.ts).

## Topics we'll treat in this course:
Now we'll refer to [advance-types.ts](./src/advanced-types.ts) file to see the course topics:

- [Enums](https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content)
- [Tuples](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#tuple-destructuring)
- [Unknown](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown)
- [Never](https://www.typescriptlang.org/docs/handbook/2/functions.html#never)

Then we'll see some facilities that are able in JavaScript but applied to typeScript functions, this examples are just to share the flexibility of JavaScript applied even to typesScript. Remember that TypeScript is a superset of JavaScript so what you can do in JS is also possible in TS. See the topics in [Applicability.ts](./src/applicability.ts) file.

- [Default and optional parameters](https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters)
- [Rest parameter](https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-parameters)
- [Overload](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#function-overloads)
- We'll treat briefly [Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces) in the [interface.ts](./src/interface.ts) file.

**Extend interfaces**
One of the benefits of using Interfaces is that we can extend an interface as we made in our **App** files. To extend an interface, first define the base model to extend, in our case we define it as [BaseModel](./src/app/base.model.ts) and then it was extended in the other interfaces, for example in [product.model.ts](./src/app/products/product.model.ts).

### 👽Faker API
For this project we'll use the [faker Api](https://fakerjs.dev/guide/) to get some fake data to build a dataBase of products. To see the implementation check the [main.ts](./src/app/main.ts) file.

### 😵‍💫[Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content)
- **[Omit:](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)** We use this utility to build our [product.dto.ts](./src/app/products/product.dto.ts)[^1]. What it makes is to construct a *type* or *interface* from the one provided but without the properties refered.

- **[Pick:](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)** is the opposite of Omit, so it construct a new type with the properties indicated.
-  **[Partial:](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)** Is used to switch all the properties to optional (property **?** : value).
- **[Required:](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype)** Is the opposite to Partial, so switch all properties to required.
- **[ReadOnly:](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)** Is used to protect the properties since they are not able to be reassigned.
- **[ReadOnlyArray:](https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type)** Is used to protect array from methods that would change its elements as: pop(), push(), shift()...

### 🤯Get a type
There an easy way to get the type of a property, just as it were an object call the type and within quotation marks inside square brackets **["-"]** send the property you want to know the type, for example, we use it in [product.service.ts](./src/app/products/product.service.ts) to define the type of the id of the product to update: `idProduct: ProductI['id']`.

>I assume that most of the utitlies made something like Omit, so I feel it give us more freedom while controling our code with types. It open a vast range of possibilities and combinations, so I think it will be helpful to study some of them.


[^1]: DTO: Data Transfer Object