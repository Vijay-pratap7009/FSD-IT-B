const number=[1,2,3,4,5,6,7,8,9,10];
const even=number.filter((num)=>num%2===0);
const newnum=number.map((num)=>(num*5));
console.log(newnum);
const sum=number.reduce((acc, curr) => acc + curr, 0);
console.log("sum is:",sum);

console.log("Even Numbers:",even);