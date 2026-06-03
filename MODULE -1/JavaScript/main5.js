class Event{
constructor(name,seats){
this.name=name;
this.seats=seats;
}
checkAvailability(){
console.log(this.seats);
}
}
let event1=new Event("Music Show",100);
event1.checkAvailability();
console.log(Object.entries(event1));