var input = Number(require("fs").readFileSync("stdin", "utf8"));

const salary = Number(input);
const showSalary = (money, percentage) => {
  const newSalary = (money + (money * percentage) / 100).toFixed(2);
  const readjustment = ((money * percentage) / 100).toFixed(2);

  console.log(`Novo salario: ${newSalary}`);
  console.log(`Reajuste ganho: ${readjustment}`);
  console.log(`Em percentual: ${percentage} %`);
};

if (salary <= 400.0) {
  showSalary(salary, 15);
} else if (salary >= 400.01 && salary <= 800.0) {
  showSalary(salary, 12);
} else if (salary >= 800.01 && salary <= 1200.0) {
  showSalary(salary, 10);
} else if (salary >= 1200.01 && salary <= 2000.0) {
  showSalary(salary, 7);
} else if (salary > 2000.0) {
  showSalary(salary, 4);
}
