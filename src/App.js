
import './App.css';
import { add, addToCart, addToCart3, addToCart4, icAnadoluSehirleri, numbers2, product1, product2, product3, products } from './function';

function App() {
  return (
    <div className="App">
     
      

    </div>
  );
}

export default App;

//JS TYPESAFE değildir
let dolarDun = 9.20
let dolarBugun = 9.30

// {
//   let dolarDun = 9.10
// }

console.log(dolarBugun);
console.log(dolarDun);

const euroDun = 11.2

console.log(euroDun);

//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>");
for(let i = 0; i<konutKredileri.length;i++){
    console.log("<li> " + konutKredileri[i] + " </li>");
}
console.log("</ul>");

addToCart("elma", 10)
addToCart3(product1)
addToCart3(product2)
addToCart3(product3)

addToCart4(products)
add(20,30,40,50,60)
console.log(...numbers2)

console.log(icAnadoluSehirleri)