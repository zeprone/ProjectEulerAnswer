#!/usr/bin/env node

let val = 600851475143;
let it = parseInt(Math.sqrt(600851475143));

function isPrime(p) {
  if(p === 2) return true;
  for(let i=2,max=parseInt(Math.sqrt(p));i<=max;++i) {
    if(p%i === 0) {
      return false;
    }
  }
  return true;
}

while(isPrime(it) === false || val%it !== 0) {--it;}
console.log(it);
