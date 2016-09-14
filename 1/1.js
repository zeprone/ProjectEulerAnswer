#!/usr/bin/env node

let sum = 0;
for(let i=1,len=1000;i<len;++i) 
    if(!(i%3) || !(i%5))
      sum += i;
console.log(sum);
