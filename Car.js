
module.exports=class {
    
    
    speed=0;
    Car(color,conv){
   this.color=color;
    this.convertible=conv;
//this.speed=0
}

accelerate(acc){
this.speed+=acc
}
decelerate(dece){
this.speed-=dece
}
}
