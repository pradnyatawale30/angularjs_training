class Box<T>{
    private data: T;
    public addData(data: T): void {
        this.data = data;
    }

    public getData(): T {
        return this.data;
    }
}

let box: Box<String> = new Box();
box.addData("John");
console.log(box.getData());

let box2: Box<Number> = new Box();
box2.addData(21);
console.log(box2.getData());

let names: Array<String> = new Array<String>();
names.push("John");
names.push("Tom");

names.forEach((name) => {
    console.log(name);
});