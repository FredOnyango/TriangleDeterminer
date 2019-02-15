function determinant(){

 var a=parseInt(document.getElementById("x").value);
 var b=parseInt(document.getElementById("y").value);
 var c=parseInt(document.getElementById("z").value);
 if (a+b<=c || a+c<=b || b+c<=a){
   alert("Cannot form a Triangle");
   }
 else if (a===b && b===c && a===c) {
   alert("It's an Equilateral Triangle");
 }
 else if (a!=b && b!=c && a!=c) {
   alert("Thats a scalene bwana!");
 }

   else {
   alert("That's an Isosceles Triangle");
   }
}
