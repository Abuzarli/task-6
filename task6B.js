function animal(name) {
    let newAnimal= name.trim().replaceAll(',','/').toUpperCase().split([]);
    return newAnimal;
}
console.log(animal('qartal,sahin,qarga,'))