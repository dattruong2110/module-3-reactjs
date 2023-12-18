let person: (string | number | boolean)[] = ["Danny", 1, true, "John"];
person[0] = 100;
console.log(person);

// person[1] = { name: "Danny "} // Error -person array can't contain objects
