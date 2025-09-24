const personas = 
[
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}

]
console.log("Personas con el nombre Luis");
 const PersonaL = personas.find(persona => persona.nombre === "Luis");
 console.log(PersonaL);

console.log("Todas las personas");

 personas.forEach(TodasPersonas => console.log(TodasPersonas));

 console.log("Sumatoria de todas las edades: ")

 let suma = personas.reduce((acumulador, persona) => acumulador += persona.edad,0);

 console.log(suma)