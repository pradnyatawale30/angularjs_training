let map = new Map();
map.set("John", 221.2);
map.set("Smith", 321.2);
map.set("Tom", 921.2);
map.set("Jerry", 421.2);

console.log(map.get("Jerry"));
console.log(map.size);


console.log("----key set-----");
let keys = map.keys();
for (let key of keys) {
    console.log(key);
}

console.log("----value set-----");
let values = map.values();
for (let value of values) {
    console.log(value);
}


console.log("----entries----");
let entries = map.entries();
console.log(entries);

for (let entry of entries) {
    let key = entry[0];
    let value = entry[1];
    console.log(key + "\t" + value);
}

// reinitialize so that cursor goes back to 0th element
entries = map.entries();
console.log("-- obj destructing--");
//object destructing
for (let [k, v] of entries) {
    console.log(k + "\t" + v);
}

map.clear();