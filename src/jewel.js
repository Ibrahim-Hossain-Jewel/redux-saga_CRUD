export function hello(){
    let x = ["A", "B", "C"];

    let obj = {
      Attendence: "Attendence",
      SemesterExam: "SemesterExam",
      ClassTest: "ClassTest",
    };
    let newObj = [];
    for (let i = 0; i < x.length; i++) {
      newObj[i] = x;
    }
    // console.log(x, obj);
    console.log(newObj);
}
