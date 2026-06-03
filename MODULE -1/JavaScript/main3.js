let events=["Music","Sports","Workshop"];
events.forEach(event=>{
console.log(event);
});
try{
let seats=0;
if(seats<=0){
throw "No seats available";
}
}
catch(error){
console.log(error);
}