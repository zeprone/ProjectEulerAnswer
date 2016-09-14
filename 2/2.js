#!/usr/bin/env node

let sum=2,u,u1=2,u2=1;
do
{
  u = u1+u2;
  u2=u1;
  u1=u;
  sum += u%2?u:0;
} while(u1+u2<4000000);
console.log(sum);
