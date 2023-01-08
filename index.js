const user = {
    name: "Oleg",
    get password() {
        return `123_${this.name}`
    },
    surname: "Ovechkin",
}
console.log(Object.entries(user));
//===============================================
console.log(Object.fromEntries(Object.entries(user)));
//===============================================
console.log(Object.values(user));
//===============================================raskumyr
console.log(Object.getOwnPropertyDescriptors(user));
//===============================================
console.log((5 ** 3));
//===============================================
console.log([7, 82, 4].includes(82));
console.log([7, 82, 4].includes(0));
//===============================================
console.log([7, 82, 4, [90, 4]].flat());
console.log([7, 82, 4, [90, 4, [7, 9]]].flat());
console.log([7, 82, 4, [90, 4, [7, 9]]].flat(2));
console.log([7, 82, 4, [90, 4, [7, 9, [6, 9, [90, 2, [798, 0.89]]]]]].flat(Infinity));
//===============================================
console.log([7, 82, 4, [90, 4, [7, 9, [6, 9, [90, 2, [798, 0.89]]]]]].flatMap(i => [i * 2]));
//===============================================
console.log('k'.padStart(10));
console.log('k'.padStart(10, "¬"));
console.log('k'.padEnd(10, "¬"));
//===============================================
console.log('Hello'.startsWith('Hello'));
console.log('Hello'.startsWith('Buy'));
console.log('Hello'.endsWith('o'));
console.log('Hello'.endsWith('o', 5));
console.log('Hello'.endsWith('o', 50));
console.log('Hello'.endsWith('o', 4));
//===============================================
console.log('      gsd   '.trim());
console.log('      gsd   '.trimStart());
console.log('      gsd   '.trimEnd());
//===============================================
console.log(function test()/*Some comment*/ {
    console.log(9);

}.toString());
//===============================================
// console.log(Symbol('ome') == Symbol('ome'));
console.log(String(Symbol('Symbol')) === "Symbol(Symbol)");
// console.log(Symbol('ome').description);
// console.log(Symbol('ome').toString());
// console.log(Symbol('ome').valueOf());
//===============================================
console.log(JSON.stringify('\uD800'));
console.log('\uD800');
//browser===============================================browser
// globalThis 
// await import() //Dynamic import
//ES12===============================================ES12
console.log('backend developer write SPA app back '.replace('back', 'front'));
console.log('backend developer write SPA app back '.replaceAll('back', 'front'));
//===============================================
(
    function () {
        console.log('Y');

    }
)()
//awaitWithout Func===============================================awaitWithout Func
// const posts = await fetch('https://jsonplaceholder.typicode.com/todos/').then(response => response.json())
//     .then(json => console.log(json)) // doesn't work
//===============================================
class Human{
    #name = "John";
    getName(){
        return this.#name
    }
    setName(name) {
      this.#name = name;
    }
}
const human = new Human()
// human.#name = 'Amy'  // Error
human.setName('Amy') // ОК
console.log(getName());
