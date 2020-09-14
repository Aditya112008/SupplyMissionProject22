class Package {
constructor(){
    var options = {
isStatic:false
    }
package = loadImage("package.png");
package =   Bodies.rectangle(x,y,this.w,this.h,options);
package.addImage("package.png");
this.w = w;
this.h = h;
}
display(){
package.display();
}

};