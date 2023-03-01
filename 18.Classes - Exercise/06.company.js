class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        const ErrorMessage = 'Invalid input!';
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error(ErrorMessage);
        }
        if (!this.departments[department]) {
            this.departments[department] = [];
            this.departments[department].totalSalary = 0;
        }
        this.departments[department].push({ name, salary, position });
        this.departments[department].totalSalary += Number(salary);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    };

    bestDepartment() {
        //sort by average salary !!!
        let output = [];
        const result = Object.entries(this.departments)
            .sort((a, b) => (b[1].totalSalary / b[1].length) - (a[1].totalSalary / a[1].length));
        const averageSalary = result[0][1].totalSalary / result[0][1].length;
        output.push(`Best Department is: ${result[0][0]}`);
        output.push(`Average salary: ${averageSalary.toFixed(2)}`);
        const sortedWorkers = result[0][1]
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .forEach(x => {
                output.push(`${x.name} ${x.salary} ${x.position}`);
            });
        return output.join('\n');
    }
}

let c = new Company();

// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());