let names = new Set();

names.add("John");
names.add("Smith");
names.add("Tom");

console.log(names.has("John"));

names.forEach(
    (name, index) => {
        console.log(name, index);
    }
    //     (name) => {
    //     console.log(name);
    // }
)
// drawback: we can not use break, continue in foreach

for (let name of names) {
    console.log(name);
}
console.log(names.size);

names.delete("John");

console.log(names.size);

names.clear();

