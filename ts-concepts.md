# 🧠 TypeScript Concepts – High-Level Overview

This document provides a high-level overview of core TypeScript concepts useful for developers transitioning from JavaScript or looking to strengthen their understanding of static typing and advanced language features.

---

## 📌 1. What is TypeScript?

TypeScript is a **strongly typed superset of JavaScript** that adds optional static typing and powerful tooling to the language. It compiles down to plain JavaScript and works across all browsers and environments.

---

## 🔤 2. Basic Type System

TypeScript introduces several primitive types:

```ts
let username: string = "Alice";
let age: number = 30;
let isActive: boolean = true;
let data: any = "Anything goes";
any: Disables type checking.

unknown: Like any, but forces type checking before use.

never: For functions that never return.

void: Indicates no return value (e.g., for functions).

🧱 3. Object Types and Interfaces
Interfaces describe the shape of objects:

interface User {
  name: string;
  age?: number; // Optional
}

You can also use type aliases:
type Point = { x: number; y: number };
✅ Use interface for extensible object structures and type for unions or utility types.

🧮 4. Functions and Typing

function greet(name: string): string {
  return `Hello, ${name}`;
}
Function parameters and return types are explicitly declared.

You can also type arrow functions, generics, and callbacks.

🔁 5. Union and Intersection Types
Union (|): One of several types

Intersection (&): Combines multiple types

type A = { name: string };
type B = { age: number };
type C = A & B; // Must have both name and age

🔀 6. Type Inference
TypeScript can infer types automatically:

let count = 42; // inferred as number
But explicit types are useful in complex situations or for clarity.

🧩 7. Generics
Generics allow you to create reusable and type-safe code:

function identity<T>(value: T): T {
  return value;
}
They are especially useful in data structures, functions, and libraries.

📦 8. Modules and Namespaces
ES Modules (modern JavaScript import/export) are preferred.

namespace is mostly used in older code or specific use cases.

import { User } from "./models/User";

🏛 9. Classes and Access Modifiers

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public move(distance: number): void {
    console.log(`${this.name} moved ${distance}m`);
  }
}
Supports public, private, protected, and readonly.

🔧 10. Utility Types
TypeScript comes with built-in utility types like:

Partial<T>

Required<T>

Readonly<T>

Pick<T, K>

Omit<T, K>

Record<K, T>

type Todo = { title: string; completed: boolean };
type PartialTodo = Partial<Todo>;

🧠 11. Type Guards & Narrowing
Type guards allow refining the type at runtime:

function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

🛠 12. Configuration (tsconfig.json)
Key compiler options:

{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "esModuleInterop": true
  }
}
tsconfig.json controls how the compiler behaves and which files to include.

🧪 13. Working with JavaScript Libraries
Install types using DefinitelyTyped:

npm install --save-dev @types/lodash
Or declare types manually via .d.ts files for custom libraries.

✅ 14. Best Practices
Always enable strict mode.

Use unknown instead of any for safety.

Prefer interface over type for object shapes.

Avoid complex nested types unless necessary.

Write reusable and generic components.

📚 Resources
TypeScript Handbook

TypeScript Playground

tsconfig Guide

This document serves as a high-level entry point. See /examples/ for real code and /docs/ for topic-specific deep dives.
