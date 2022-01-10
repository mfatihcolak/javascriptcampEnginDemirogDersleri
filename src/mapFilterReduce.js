export let cart = [
    {id : 1 , productName : "Telefon", quantity : 3, unitPrice : 4000},
    {id : 2 , productName : "Bardak", quantity : 1, unitPrice : 10},
    {id : 3 , productName : "Şarj Aleti", quantity : 1, unitPrice : 200},
    {id : 4 , productName : "Kitap", quantity : 5, unitPrice : 15},
    {id : 5 , productName : "Defter", quantity : 2, unitPrice : 10},
    {id : 6 , productName : "saat", quantity : 1, unitPrice : 250},
]

//sepetteki ürünlerin fiyatları toplamı
export let total = cart.reduce((acc,product) => acc+ product.unitPrice, 0)

//FİLTRELEME ÖZELLİĞİ GETİRİYOR .filter
export let quantityOver2 = cart.filter(product => product.quantity > 2)


export function addToCart6(sepet) {
    sepet.push({id : 7 , productName : "çanta", quantity : 1, unitPrice : 250})
}

export let sayi = 10

export function sayiTopla(number) {
    number += 1;
}
