var x, y, suma, z;
x = prompt("ingrese numero: ");
y = x;

while(y = x){
    z= prompt("ingrese un nuevo numero: ");
    x-1;
    suma = suma + z;
    if(y = 0){
        console.log(suma);
        break;
    }
}