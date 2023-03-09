// string a ser invertida
const str = "exemplo de string";

// variável que receberá a string invertida
let strInvertida = "";

// iterar pela string de trás para frente e adicionar cada caractere na nova string
for (let i = str.length - 1; i >= 0; i--) {
  strInvertida += str[i];
}

// imprimir a string invertida
console.log(strInvertida);
