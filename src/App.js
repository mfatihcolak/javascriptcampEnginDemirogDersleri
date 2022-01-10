
import './App.css';
import { add, addToCart, addToCart3, addToCart4, icAnadoluSehirleri, numbers2, product1, product2, product3, products } from './function';
import { addToCart6, cart, quantityOver2, sayi, sayiTopla, total } from './mapFilterReduce';
import UserService from './services/userService';

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

console.log(icAnadoluSehirleri);

//map == sepeti dolaşıyor her product için geçerli fonkisyonu yerine getiriyor
//product burada foreachteki gibi görev görüyor
console.log("map = " + "<ul>" );
cart.map(product => {
  console.log("<li> " + product.productName + " : " + product.unitPrice * product.quantity + " <li>")
})
console.log("</ul>");

console.log("reduce = " + total);
console.log("filter işlemi = "); console.log(quantityOver2);

addToCart6(cart)
console.log(cart);

sayiTopla(sayi)
console.log(sayi);


console.log("User component Yüklendi");

export let userService = new UserService
userService.list()
userService.add()
userService.getById(11)
