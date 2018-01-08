class Employee {
    private eid: number;
    private name: string;
    private status: boolean;

    // ? means optional parameter
    // default values will be undefined here..because its a javascript after compilation
    constructor(eid?: number, name?: string, status?: boolean) {
        this.eid = eid;
        this.name = name;
        this.status = status;
    }

    getEid(): number {
        return this.eid;
    }

    getName(): string {
        return this.name;
    }

    getStatus(): boolean {
        return this.status;

    }



}

// only single inheritance possible in TS
class Manager extends Employee {
    private teamCount: number;

    private constructor(eid?: number, name?: string, status?: boolean, teamcount?: number) {
        super(eid, name, status);
        this.teamCount = teamcount;
    }

    getTeamCount(): number {
        return this.teamCount;
    }

}

let employee: Employee = new Employee(101, "John", true);

console.log(employee.getEid());
console.log(employee.getName());
console.log(employee.getStatus());

let manager: Manager = new Manager(102, "Smith", true, 10);

console.log(manager.getEid());
console.log(manager.getName());
console.log(manager.getStatus());
console.log(manager.getTeamCount());

// is static instance possible here?
// or if we can make constructor as private?