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
