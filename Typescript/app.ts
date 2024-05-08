function logName(name: string) {
  console.log(name);
}
logName("aaa");

let student = {
  name: "john",
  course: "typescript",
  score: 100,
  grade: function () {
    console.log("A");
  },
};

student.name = "park";

enum GenderType {
  Male,
  Femail,
}

interface Student {
  stdId: number;
  stdName: string;
  age?: number;
  gender: GenderType;
  course: string;
  completed: boolean;
  setName?: (name: string) => void;
  getName?: () => string;
}

class MyStudent implements Student {
  stdId = 2;
  stdName = "park";
  age = 26;
  gender = GenderType.Male;
  course = "typescript";
  completed = true;
}

function getInfo(id: number): Student {
  return {
    stdId: 1,
    stdName: "lee",
    // age: 22,
    gender: GenderType.Male,
    course: "typescript",
    completed: true,
  };
}
let std = {
  stdId: 1,
  stdName: "lee",
  // age: 22,
  gender: GenderType.Male,
  course: "typescript",
  completed: true,
};

function setInfo(student: Student): void {
  console.log(student);
}
setInfo(std);

// 타입 별칭
type strOrNum = number | string;
let item: number;

let numStr: strOrNum = 100;
function convertToString(val: strOrNum): string {
  // 타입가드
  if (typeof val === "string") {
    item = 0;
  } else {
    item = val;
  }
  return String(val);
}
function convertToNumber(val: strOrNum): number {
  return Number(val);
}
console.log(convertToString(200));
console.log(convertToNumber(200));

// 튜플 : 타입의 순서가 정해져 있다.
let greeting: [number, string, boolean] = [1, "hello", true];
