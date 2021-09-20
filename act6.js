var frase = prompt("Ingresa aqui tu frase: ");
var a=0, e=0, i=0, o=0, u=0;
     (frase,20,'\n');

for(var t=0; t<20; t++){
    switch(frase[t]){
        case 'a': a++;
        break;
        case 'e': e++;
        break;
        case 'i': i++;
        break;
        case 'o': o++;
        break;
        case 'u': u++;
        break;
    }
}

     console.log("vocal a: ",a);
     console.log("vocal e: ",e);
     console.log("vocal i: ",i);
     console.log("vocal o: ",o);
     console.log("vocal u: ",u);