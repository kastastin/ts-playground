// This is an industrial-grade general-purpose greeter function:
function logHello(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
logHello("Brendan", new Date());

async function getFavoriteNumber(): Promise<number> {
  return 12;
}

const colors = ["red", "green", "blue"];
// Contextual typing applies to arrow functions (s: string)
colors.forEach((s) => console.log(s));

// The parameter's type annotation is an object type
function logCoord(point: { x: number; y: number }) {
  console.log(`(${point.x}, ${point.y})`);
}
logCoord({ x: 12, y: 24 });

function logName(obj: { first: string; last?: string }) {
  console.log(`Name: ${obj.first} ${obj?.last ?? ""}`);
}
logName({ first: "Tom" });
logName({ first: "Bob", last: "Builder" });

// <-- Union Types -->

// prettier-ignore
// The separator of the union members is allowed before the first element
function logStringOrNumberorBoolean(
  stringOrNumberorBoolean:
    | string
    | number
    | boolean,
) {
  console.log(stringOrNumberorBoolean);
}

// TS will only allow an operation if it is valid for EVERY member of the union
function logId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// <-- Type Aliases -->

// Type CAN'T be re-opened to add new properties
type Point = {
  x: number;
  y: number;
};

function logCoordInfo(point: Point) {
  console.log(`(${point.x}, ${point.y})`);
}

// <-- Interfaces -->

// Interfaces CAN be re-opened to add new properties
interface Coord {
  x: number;
  y: number;
}

function printCoord(coord: Coord) {
  console.log(`(${coord.x}, ${coord.y})`);
}

// <-- Type Assertions -->

// Type assertions are a way to tell the compiler "trust me, I know what I'm doing."
const myCanvas = document.getElementById("main-canvas") as HTMLCanvasElement;

// <-- Literal Types -->

function logText(s: string, alignment: "left" | "right" | "center") {
  console.log(s);
}
logText("Example text", "center");

// <-- Non-null Assertion Operator (Postfix!) -->

// Use ! when you know that the value can’t be null or undefined
function liveDangerously(x?: number | null) {
  console.log(x!.toFixed());
}

// <-- instanceof narrowing -->

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// <-- Discriminated unions -->

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  // "kind" -> considered a discriminant property of Shape
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

// <-- Generic Functions --> 

function firstElement<T>(arr: T[]):T | undefined {
  return arr[0];
}
const n = firstElement([1, 2, 3]); // 1

function mapFn<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output,
): Output[] {
  return arr.map(func);
}
const parsed = mapFn(["1", "2", "3"], (n) => parseInt(n));