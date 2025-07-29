# 💼 TypeScript Interview Questions

This document covers common and important TypeScript interview questions, categorized by difficulty. Each question includes a brief explanation or code example.

---

## 🟢 Beginner Level

### 1. What is TypeScript?
> TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds features like static typing, interfaces, enums, and type inference.

---

### 2. What are the basic types in TypeScript?
- `string`, `number`, `boolean`
- `any`, `unknown`, `void`, `never`
- `null`, `undefined`
- `object`, `array`, `tuple`

---

### 3. What is type inference?
> TypeScript automatically infers the type of a variable when possible.

```ts
let count = 5; // inferred as number
4. What is the difference between interface and type?
Feature	interface	type
Extendable	✅ (extends)	✅ (intersection)
Declaration Merging	✅	❌
Use Cases	Object shapes	Primitives, unions, more

5. What does the any type do?
Disables type checking, effectively telling the compiler to “trust you.” Use sparingly.

🟡 Intermediate Level
6. What is a union type?
function format(value: string | number): string {
  return value.toString();
}
A union allows a variable to be one of multiple types.

7. What is the difference between any and unknown?
any: Disables all type checking

unknown: Safer — forces type checking before usage

8. What are Generics?
function identity<T>(value: T): T {
  return value;
}
Generics allow you to write reusable, type-safe code.

9. What are type assertions?

let input = document.getElementById('name') as HTMLInputElement;
Tell the compiler what the type is (no runtime effect). Use with caution.

10. What are utility types in TypeScript?
Examples:

Partial<T>

Readonly<T>

Pick<T, K>

Omit<T, K>

Record<K, T>

🔴 Advanced Level
11. What is a mapped type?

type ReadOnlyUser = {
  readonly [K in keyof User]: User[K];
};
Transform each property of a type using keyof and index access.

12. What is a conditional type?

type IsString<T> = T extends string ? true : false;
Enables branching logic in the type system.

13. What is type narrowing?
TypeScript infers a more specific type based on runtime checks.


function print(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase()); // narrowed to string
  }
}
14. What is the never type?
Used for functions that never return or throw.

function fail(message: string): never {
  throw new Error(message);
}
15. How does declaration merging work?

interface User {
  name: string;
}

interface User {
  age: number;
}
The two interfaces merge into one: { name: string; age: number }.

🧠 Real-World Scenarios
16. How would you migrate a JS project to TypeScript?
Rename .js to .ts

Add tsconfig.json

Start by using any and gradually replace it

Add type definitions (@types/...)

Enable strict mode when feasible

17. How do you share types between backend and frontend?
Create a shared types/ folder or npm package

Export interfaces and types from there

Use in both projects via import

18. How do you handle dynamic or JSON data safely?

function isUser(obj: any): obj is User {
  return typeof obj.name === "string";
}
Use type guards to check structure before using it.

🧩 Behavioral Questions
19. How do you ensure type safety in a team environment?
Enable strict mode

Use shared tsconfig.json

Use ESLint + Prettier

Review PRs with a focus on type coverage

Avoid using any unless justified

20. What tooling do you use with TypeScript?
tsc for compiling

ts-node for dev/testing

eslint with @typescript-eslint

prettier for formatting

vite or webpack for bundling

jest or vitest for testing

🧪 Tips for Interviews
Explain trade-offs, not just definitions

Walk through real examples or refactors

Know common tsconfig flags (strict, esModuleInterop)

Mention experience with migrating codebases or libraries

