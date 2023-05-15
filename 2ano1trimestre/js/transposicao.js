//CRIANDO A MATRIZ QUE SERÁ TRANSPOSTA
var matriz = new Array();
var numcol = parseInt(Math.random() * 5) + 1; //declara uma váriavel do número de colunas(número de casas dentro da matriz) 
//que vai gerar um número aleatório inteiro de colunas de 1 a 5
var numlin = parseInt(Math.random() * 5) + 1; //declara uma váriavel do número de linhas(número de matrizes dentro da matriz) 
//que vai gerar um número aleatório inteiro de linhas de 1 a 5

//GERANDO OS VALORES DA MATRIZ QUE SERÁ TRANSPOSTA
for ( var i = 0; i < numlin; i++) { //fazendo um laço de repetição que irá criar as matrizes interiores que serão as linhas
    var matrizinterna = new Array(); //repetindo a criação da matriz interna 1 até dar o número de linhas gerado
    for ( var j = 0; j < numcol; j++) { //fazendo um laço de repetição para colocar valores dentro do número de colunas gerado
        var valor = parseInt(Math.random() * 50); //criando os valores que serão colocados na matriz 1
        matrizinterna[j] = valor; //colocando os valores aleatórios dentro da matriz interna 1
    }
    matriz.push(matrizinterna); //colocando a matriz interna (linhas) dentro da matriz 1
}

//FAZENDO A TRANSPOSIÇÃO
function transposicao(matriz){ //criando a função que realizará a transposição
    var mtransp = new Array(); //criando a matriz transposta
    for ( var m1 = 0; m1 < numcol; m1++){ //fazendo um laço for que no lugar das linhas vai criar o número de colunas, já que por ser uma matriz transposta agora as linhas serão as colunas
        var matrizint = new Array(); //criando a matriz interna (linha)
        for ( var m2 = 0; m2 < numlin; m2++) { //fazendo um laço for onde no lugar das colunas vai criar o número de linhas, já que por ser uma matriz transposta agora as colunas serão as linhas
            matrizint[m2] = matriz[m2][m1]; //colocando na matriz interna no lugar do número de colunas o de linhas, porém na matriz normal pedindo os números certos, sendo nas linhas as linhas e nas colunas as colunas, já que é apenas na matriz transposta que seus valores mudam de lugar
        }
        mtransp.push(matrizint); //colocando a matriz interna dentro da matriz total 
    }

    return mtransp; //retornando a matriz total 
}

console.table(matriz);
console.table(transposicao(matriz));

// MOSTRANDO A MATRIZ E SUA TRANSPOSTA COM A TABELA 
// QUE ESTÁ NO CONTEÚDO DISPONIBILIZADO NO SIGAA


//fazendo o mesmo processo que foi utilizado para mostrar os resultados da soma
document.write("<div class=container-fluid><div class=row><div class=col-sm-2></div>"); 

//MOSTRANDO MATRIZ 1
document.write("<div class=col-sm-3><table width=170px>");
for (i = 0; i < numlin; i++) {
    var linha = "<tr>";
    for (j = 0; j < numcol; j++) {
        linha = linha + "<td>" + matriz[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div><div class=col-sm-1><p class=centro> = <p></div>");

//MOSTRANDO MATRIZ 2
document.write("<div class=col-sm-3><table width=170px>");
for (i = 0; i < numcol; i++) {
    var linha = "<tr>";
    for (j = 0; j < numlin; j++) {
        linha = linha + "<td>" + transposicao(matriz)[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div>");

document.write("<div class=col-sm-3></div></div></div>");