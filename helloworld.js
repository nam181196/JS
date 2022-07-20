//Sử dụng và khai báo biến, hằng
let a=1;
a=10;
a=8;
//
const Max=100;
//Ví dụ: Tính tổng 2 số
let b=5;
console.log("tổng 2 số a và b là:" +(a+b));


//console.log("Hello World!")
// Toán tử số học:+-*/%
// Toán tử gán:= += -=
// Comment code :// hoặc Ctrl+ /

console.log(a/b)
let c=a+b;
c +=b;
console.log(c)

//Toán tử so sánh: == === > < >= <= != !==
//Kết quả phép ss : True or False
console.log(5 == 5);
console.log(6 === 6);
console.log('5' == 5);
console.log('6' === 6);
// == so sánh giá trị, nếu khác kiểu dữ liệu thì nó sẽ ép sang cùng 1 kiểu
// === so sánh cả giá trị và kiểu dữ liệu

if(a==b){
    console.log("a=b");
}
else if(a>b){
    console.log("a>b");
}
else{
    console.log("a<b");
}
// Viết phương trình giải pt bậc nhất
// Vd cx+d=0
// c===0 && d===0: PT vô số nghiệm
// c===0 && d !==0: vô nghiệm
// c!==0 -> x=-d/c
 let d= 10;
 let e= 20;

 if (d === 0 && e === 0){
    console.log('Phương trình vô số nghiệm');
}
else if (d === 0 && e !== 0){
    console.log("Phương trình vô nghiệm");
}
else {
    console.log("x = " + (-e/d));
}
//Vd2: giải pt bậc 2
// ax^2+bx+c=0
//Tính delta= b*b-4*a*c
//TH1: delta < 0: -> PT vô nghiệm
//TH2: delta == 0: -> x=-b/(2*a)
//TH3: delta > 0: -> x1=(-b+ Math.sqrt(delta))/2*a
//                   x2=(-b- Math.sqrt(delta))/2*a
// Với Math.sqrt() là hàm tính căn bậc 2


let delta= b*b-4*a*c;
if(delta==0){
 console.log("x= "+ -b/(2*a));
}
else if(delta<0){
 console.log("phuong trinh vo nghiem");
}
else{
 console.log("phuong trinh co hai nghiem");
 x1=(-b-Math.sqr(delta))/(2*a);
 x2=(-b+Math.sqr(delta))/(2*a);
}