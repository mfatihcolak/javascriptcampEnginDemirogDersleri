
import './App.css';

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

{
  let dolarDun = 9.10
}

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


