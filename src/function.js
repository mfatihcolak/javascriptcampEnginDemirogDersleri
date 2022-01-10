
export function addToCart(productName, quantity) {
    console.log("Sepete Eklendi : " + productName
    + " Adet : " + quantity);
}
addToCart("ELMA", 10)
addToCart("armut",20)
addToCart("şeftali",30)

let sayHello = () => {
    console.log("HELLO!");
}

let sayHello2 = function () {
    console.log("hello world 2");    
}
sayHello();
sayHello2();

export function addToCart2(productName, quantity, unitPrice){


}
addToCart2("elma",5,10)
addToCart2("armut",2,10)
addToCart2("limon",3,15)

export let product1 = {productName: "Elma", unitPrice : 10, quantity : 5}
export function addToCart3(product) {
    console.log("Ürün : " + product.productName);
    console.log("Adet : " + product.quantity);
    console.log("Fiyat : " + product.unitPrice);
}

export let product2 = {productName: "Elma", unitPrice : 10, quantity : 5}
export let product3 = {productName: "Elma", unitPrice : 10, quantity : 5}
product2 = product3
product2.productName = "Karpuz"

export function addToCart4(products) {
    console.log(products);
}

export let products = [
    {productName: "Elma", unitPrice : 10, quantity : 5},
    {productName: "Armut", unitPrice : 10, quantity : 5},
    {productName: "Karpuz", unitPrice : 10, quantity : 5}
]

export function add(bisey,...numbers) {
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total = total + numbers[i] 
    }
    console.log("Sayıların Toplamı = " + total);
    console.log(bisey);
}
export let numbers2 = [30,10,40,50,60]

export let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç anadolu", population : "20Mil"}, 
    {name :"Marmara", population : "30Mil"}, 
    {name :"Karadeniz", population : "10Mil"},
    [
        ["ankara","konya"],
        ["istanbul","bursa"],
        ["sinop","trabzon"],
    ]
]


