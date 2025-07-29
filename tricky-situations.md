# ⚠️ Tricky TypeScript Situations – What to Prefer and Why

This guide covers common TypeScript dilemmas and confusing features that developers frequently encounter. Each section includes an example, explanation, and a clear recommendation.

---

## 🆚 1. `interface` vs `type`

### Problem:
Which one should you use to define an object shape?

```ts
interface User {
  name: string;
}

type Admin = {
  name: string;
};
Recommendation:
✅ Use interface when describing the shape of objects, especially if extensibility or merging is needed.

✅ Use type when using unions, intersections, or for more complex compositions.

Rule of thumb: Use interface for public APIs and class-based design, type for everything else.

🆚 2. any vs unknown
Problem:
Should you use any when the type is not known?

ts
Copy
Edit
let data: any;       // compiles, but unsafe
let value: unknown;  // safer, forces checks
Recommendation:
❌ Avoid any — it disables type checking.

✅ Use unknown when the type is not yet known, and narrow it before using.

ts
Copy
Edit
if (typeof value === 'string') {
  console.log(value.toUpperCase()); // Safe
}
🆚 3. Enum vs Union Literal Types
Problem:
When to use enum vs string literals?

ts
Copy
Edit
enum StatusEnum {
  Active,
  Inactive
}

type Status = 'active' | 'inactive';
Recommendation:
✅ Prefer union literals for simplicity and better type narrowing.

✅ Use enum if values are numeric or for interoperability with backend code.

🆚 4. as Type Assertion vs Type Guards
Problem:
Is it safe to assert types directly?

ts
Copy
Edit
const input = document.getElementById("name") as HTMLInputElement;
input.value = "Hello"; // ❌ May crash if not actually an input
Recommendation:
❌ Avoid using as unless absolutely sure.

✅ Use type guards (instanceof, typeof, custom checks) for runtime safety.

ts
Copy
Edit
if (input instanceof HTMLInputElement) {
  input.value = "Hello";
}
🆚 5. Optional Chaining vs Manual Checks
Problem:
Is it safe to access deeply nested properties?

ts
Copy
Edit
const city = user.address?.location?.city;
Recommendation:
✅ Use optional chaining (?.) for cleaner and safer access.

❌ Avoid deeply nested chains—refactor the structure if it's too deep.

🆚 6. Function Overloading vs Union Parameters
Problem:
Should you overload or use union types?

ts
Copy
Edit
function format(input: string): string;
function format(input: number): string;
function format(input: string | number) {
  return input.toString();
}
Recommendation:
✅ Use overloads when behavior differs based on type.

✅ Use union if logic is the same regardless of type.

🆚 7. Readonly vs const
Problem:
What’s the difference between readonly and const?

ts
Copy
Edit
const arr = [1, 2, 3]; // const, but array is still mutable

const person: { readonly name: string } = { name: "Alice" };
// person.name = "Bob"; ❌ Error
Recommendation:
const is for variables.

readonly is for object or class properties.

🆚 8. Structural Typing (Duck Typing)
Problem:
Why do objects with matching structure pass without being explicitly typed?

ts
Copy
Edit
interface Point { x: number; y: number }

const p = { x: 10, y: 20, z: 30 };
const a: Point = p; // ✅ Allowed — excess property checks are bypassed
Recommendation:
✅ Be mindful of excess properties when assigning variables.

❌ Avoid passing object literals with extra fields directly into functions typed with interfaces.

🆚 9. Class vs Object Literals
Problem:
When to use a class vs a simple object?

ts
Copy
Edit
class Logger {
  log(message: string) {
    console.log(message);
  }
}

const logger = {
  log(message: string) {
    console.log(message);
  }
};
Recommendation:
✅ Use classes for stateful components and shared methods.

✅ Use objects for utility modules or stateless helpers.

🆚 10. Partial<T> vs Optional Fields
Problem:
What's the difference between these two?

ts
Copy
Edit
type User = { name: string; age: number };
type PartialUser = Partial<User>;  // all fields optional

type OptionalUser = {
  name?: string;
  age?: number;
};
Recommendation:
✅ Use Partial<T> for transforming existing types.

✅ Use ? for defining new optional fields from scratch.

🧠 Pro Tips
Enable strict mode in tsconfig.json for maximum safety.

Use tsc --noEmit in CI/CD to catch type errors without compiling.

Leverage VS Code TypeScript integration for better DX.

Keep types localized and minimal unless reuse is necessary.

📚 See Also
ts-concepts.md

interview-questions.md

TypeScript Docs

✨ These tricky cases come from real-world experience—understanding them deeply can help you write safer and cleaner TypeScript code.

