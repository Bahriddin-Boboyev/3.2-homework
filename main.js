let yevro = 12354.03;
let sum = 11000.34;
let minsum = 5500000;
let mindollor = 500;
let a = 250;
let ism = prompt("Ismingiz?")
let address = prompt("Qayerga bormoqchisiz?")
let dollor = prompt("Pul miqdorni kiriting? (so'm)");
let result = (dollor / sum);
console.log(`$${Math.trunc(result)}`);
document.write("Sizning pulingiz: " +  `$${Math.trunc(result)} dollor` + `<br>`); 

if (result > mindollor ){
  console.log(`${Math.trunc(result)}` + "Oq yo’l, " + ism +`!`);
  document.write("Oq yo’l, " + ism +`!` + `<br>`);
  console.log(address + "ga borishingiz uchun mablag'ingiz yetarli! 😊");
  document.write(address + "ga borishingiz uchun mablag'ingiz yetarli! 😊"  + `<br>`);
  let hotel = prompt(ism + " siz mehmon xona uchun to'lov so'massini kiriting! (250$)");
  if(result < a) {
    console.log(hotel);
    document.write("to'lov amalga oshirildi! 🤩"  + `<br>`);
  }
  else {
    document.write("to'lov amalga oshirilmadi! 😑"  + `<br>`);
}
}
else {
  console.log(ism + ", ozgina sabr qilish kerak bo’lar ekan.");
  document.write(ism + ", ozgina sabr qilish kerak bo’lar ekan." + `<br>`);
  console.log(address + "ga borishingiz uchun mablag'ingiz yetarli emas! 😢");
  document.write(address + "ga borishingiz uchun mablag'ingiz yetarli emas! 😢");
}

