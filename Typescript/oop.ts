// // 일반적인 직원 정보
// let empName: string;
// let age: number;
// let empJob: string;

// function printEmp(empName: string, age: number, empJob: string): void {
//   console.log(`${empName}의 나이는 ${age}이고 직업은 ${empJob}입니다.`);
// }

// printEmp("kim", 20, "developer");

class Employee {
  constructor(
    private _empName: string,
    private _age?: number,
    private _empJob?: string
  ) {}

  get empName() {
    return this._empName;
  }

  set empName(val: string) {
    this._empName = val;
  }

  printEmp = (): void => {
    console.log(
      `${this._empName}의 나이는 ${this._age}이고 직업은 ${this._empJob}입니다.`
    );
  };
}

let employee1 = new Employee("kim", 30, "소프트웨어 개발자");
employee1.empName = "lee";
employee1.printEmp();
