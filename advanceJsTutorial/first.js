const units = parseInt(prompt(("Please enter")));
const rental=250;
let billamount=0;
if(units<=100){
    billamount=units*1;
}
else if(units<=350){
    billamount=100 + (units-100)*1.5;
}
else if(units<=600){
    billamount=100 + 250*1.5+(units-350)*2;
}
else{
    billamount=100 + 250*1.5+250*2+(units-600)*3;
}

billamount+=rental;

console.log(billamount);
