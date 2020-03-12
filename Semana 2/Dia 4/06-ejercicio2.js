alert("Ingrese la primera cordenada(x,y)")
var a=prompt("x")
a=parseInt(a)
var b=prompt("y")
b=parseInt(b)
alert("Ingrese la segunda cordenada(x,y)")
var c=prompt("x")
c=parseInt(c);
var d=prompt("y")
d=parseInt(d);
var x1=(c-a);
var x = x1*x1;
var y1=(d-b);
var y = y1*y1;
var resul = x+y;
console.log(x,y)
var r=Math.sqrt(Math.pow((c-a),2)+Math.pow((d-b),2))
alert("la distancia es de "+r)

