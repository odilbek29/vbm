
let studentlar=["Zufar","Muhammadalo","Odilbek","Qodirjon","Muhammad","Fayzulloh","Abdumajid","Muhammadsolih"];



console.log(studentlar);
alert("Boshlanishdagi array uzunligi:"+ studentlar.length);

let javob=confirm("Ichidan bitta elemetni o'chirmoqchimiz")
if(javob==true){
    studentlar.pop();
    alert("Array uzunligi:"+ studentlar.length);    
}else{
    alert("Array uzunligi:"+ studentlar.length)
}
console.log(studentlar)