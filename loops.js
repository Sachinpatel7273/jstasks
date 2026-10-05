// for(i=1; i<=1000; i++){
//     console.log("sachin");

// }

// for(i=11; i<=15; i++){
//     console.log(i);

// }

// for(let i=9; i<=29; i+=5){
//     console.log(i);

// }

// for(let i=29; i>=9; i-=5){
//      console.log(i);

//  }

// for(let i=14; i>=2; i-=4){
//      console.log(i);

//  }
// let i=10;
// while(i<=50){
//     console.log(i)
//     i=i+10;

// }

// let i=95;
// while(i>=80){
//     console.log(i)
//     i=i-5;

// }

// let i=4;
// while(i<=16){
//     console.log(i)
//     i=i+3;

// }

// let i=10;
// while(i>=1){
//     console.log(i)
//     i=i-1;

// }

// let sum =0;
// for(i=2; i<=6;i++){
//      sum=sum+i;
// }
// console.log(sum);

// let sum=0;
// let i=2;
// while (i<=6) {
//     sum=sum+i;
//     i++;
// }
// console.log(sum

// first n natural numbers
// let i=1;
// let sum =0;
// let n=6;
// while(i<n){
//     sum=sum+i;
//     i++;
// }
// console.log(sum);

// let fact=1;
// let i=3;
// while (i>=1) {

//     fact=fact*i
//     i--;
// }
// console.log(`${fact} is factorial of 3`);

// for(let j=1;j<=5;j++){
//     let output="";
// for(let i=1;i<=3;i++){
//     output=output+i;
// }
// console.log(output);
// }

// for(let i=1;i<=10;i++){
//     let n=i;
// if(i%2===0){
//     console.log(i);

// }
// }

// for(let j=1;j<=5;j++){
// let fact=1;
// let i=j;
// while (i>=1) {

//     fact=fact*i
//     i--;
// }
// console.log(`${fact} is factorial of 3`);
// }

// for(let i=1;i<=10;i++){
//     console.log(i);
//     if(i===5){
//         break;
//     }

// }

// let i = 1;
// while (i <= 5) {
//   if (i === 3) {
//     break;
//   }

//   console.log(i);
//   i++;
// }

// for(let i=22; i<=30;i++){
//     if (i%5==0) {
//         console.log(i);

//         break;

//     }
// }

// let i=22;
// while(i<=30){
//     if(i%5==0){
//         console.log(i);
//         break;

//     }
//     i++;
// }

// let i=59;
// while(i>=50){
//     if(i%4==0){
//         console.log(i);
//         break;

//     }

//     i--;
// }

// let start=10;
// let end =20;
// let count=0;
// for(let i=start;i<=end;i++){
//     count++
//     console.log(i);
//     if(count===3){
//         break;

//     }

// }

// let start = 25;
// let end = 13;
// let count = 0;
// for (let i = start; i >= end; i--) {
//   if (i % 2 == 0) {
//     count++;
//     console.log(i);

//     if (count == 2) {
//       break;
//     }
//   }
// }


// for(i=10;i<=20;i++){
//     if (i===13) {
//         continue
        
//     }
//     console.log(i);
    
// }

// for(i=2000;i<=2026;i++){
//     if (i===2021) {

//         continue
        
        
//     }
//     console.log(i);
    
// }

// let i=2000;
// while (i<=2026) {
//     if (i===2023) {
//         i++;
//         continue;
        
//     }
//     console.log(i);
//     i++;
    
// }

// let i=10;
// do{
//     console.log(i);
//     i--;
    
// }while (i>=5);
let ans;
do{
    let n=parseInt(prompt("enter a number to vheck even or not"));
    if(n%2===0){
        alert("even")
    }else{
        alert("not even or odd")
    }
    ans=prompt("do you want to echeck any other number ?Y/N");
}while(ans==="y")