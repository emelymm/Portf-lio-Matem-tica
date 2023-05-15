//CRIANDO AS MATRIZES QUE SERÃO UTILIZADAS
var matrizo2 = new Array(); //matriz ordem 2
var matrizo3 = new Array(); //matriz ordem 3 

//GERANDO VALORES NAS MATRIZES
for (var i = 0; i < 2; i++) { //como será de ordem 2 o número de linhas será 2, então repetiremos para criar as linhas
    var minto2 = new Array(); //criando a matriz interna (linha)
    for (var j = 0; j < 2; j++) { //como será de ordem 2 o número de colunas também será 2, então repetiremos para colocar os valores e fazer 2 colunas
        var valor = parseInt(Math.random() * 50); //gerando valores de 0 a 50
        minto2[j] = valor; //colocando os valores dentro da linha
    }
    matrizo2.push(minto2); //colocando a linha dentro da matriz
}

console.table(matrizo2);

for (var i = 0; i < 3; i++) { //como será de ordem 3 o número de linhas será 3, então repetiremos para criar as linhas
    var minto3 = new Array(); //criando a matriz interna (linha)
    for (var j = 0; j < 3; j++) { //como será de ordem 3 o número de colunas também será 3, então repetiremos para colocar os valores e fazer 3 colunas
        var valor = parseInt(Math.random() * 50); //gerando valores de 0 a 50
        minto3[j] = valor; //colocando os valores dentro da linha
    }
    matrizo3.push(minto3); //colocando a linha dentro da matriz
}

console.table(matrizo3);

function determinante2 (matrizo2) { //criando a função que irá calcular o determinante da matriz de ordem 2
    var determinanteo2; //criando a variável para guardar o determinante da matriz de ordem 2
    var mult = new Array(); //criando um array que irá guardar os valores das multiplicações das diagonais
    var m1 = 0; //criando uma variável que irá representar o número de colunas da matriz, isso para utilizar como o primeiro número que será multiplicado a outro e iniciando a 0 porque ele irá crescer
    var m2 = 1; //criando uma variável que irá representar o número de colunas da matriz, isso para utilizar como o segundo número que será multiplicado a outro e iniciando a 1 porque ele irá diminuir
    do { //criando um loop do, iria utilizar o for mas achei mais fácil utilizar o do já que lidaremos com 2 variáveis
        mult[m1] = matrizo2[0][m1] * matrizo2[1][m2]; //fazendo a multiplicação dos números levando em consideração que essa multiplicação será do a11 com o 22 e na segunda vez será com o a12 e o a21
        m1++; //aumentando o valor da variável que representa o número de colunas da matriz, onde fica o primeiro número da multiplicação
        m2--; //diminuindi o valor da variável que representa o número de colunas da matriz, onde fica o segundo número da multiplicação
    } while ((m1 < 2) && (m2 => 0)); //declarando que é para repetir apenas enquanto o m1 for menor que 2 e o m2 por maior ou igual a 0

    return determinanteo2 = mult[0] - mult[1]; //fazendo a subtração da primeira multiplicação de diagonal (principal) menos a multiplicação da segunda diagonal (secundária)
}

//Para fazer a seguinte função eu analisei primeiramente a ordem dos números multplicados das diagonais primárias, aqueles que teriam valor positivo, da seguinte forma:
//a11 * a22 * a33 
// +
//a12 * a23 * a31
// +
//a12 * a21 * a32
//com isso percebi que o número de linhas se mantia sempre o mesmo e o número de colunas mudava, os de linha 1 o número de colunas aumentava, o de linha 2 primeira aumentava e depois diminuia, e o de linha 3 primeiro diminuia 2 e depois aumentava
//com essa ideia em mente fiz a mesma coisa com as diagonais secundárias que seriam negativas e utilizei essa ideia para desenvolver o código
//-
//a13 * a22 * a31
//-
//a11 * a23 * a 32
//-
//a12 * a21 * a33

function determinante3 (matrizo3) { //criando a função que irá calcular o determinante da matriz de ordem 3
    var determinanteo3; //criando a variável que irá armazenar o determinante

    //criando variáveis referentes as diagonais primárias
    var posit = 0; //criando a variável que irá armazenar a soma dos valores das multiplicações diagonais de valor positivo, as diagonais principais
    var posm1 = 0; //criando a variável da coluna do primeiro valor a ser multiplicado, os quais serão a11, 12 e 13
    var posm2 = 1; //criando a variável da coluna do segundo valor a ser multiplicado, os quais serão a22, a23 e a21
    var posm3 = 2; //criando a variável da coluna do terceiro valor a ser multiplicado, os quais serão a33, a31 e a32

    //criando variáveis referentes as diagonais secundárias
    var negat = 0; //criando a variável que irá armazenar a soma dos valores das multiplicações diagonais de valor negativo, as diagonais secundárias
    var negm1 = 2; //criando a variável da coluna do primeiro valor a ser multiplicado, os quais serão a13, 11 e 12
    var negm2 = 1; //criando a variável da coluna do segundo valor a ser multiplicado, os quais serão a22, a23 e a21
    var negm3 = 0; //criando a variável da coluna do terceiro valor a ser multiplicado, os quais serão a31, a32 e a33

    var multpos; //criando uma variável que irá armazenar o valor da multiplicação dos valores das diagonais primárias, e que mudará de valor toda vez que o do...while for executado
    var multneg; //criando uma variável que irá armazenar o valor da multiplicação dos valores das diagonais secundárias, e que mudará de valor toda vez que o do...while for executado

    do { //criando um loop do que fará a repetição para a multiplicação e soma das diagonais principais
        multpos = matrizo3[0][posm1] * matrizo3[1][posm2] * matrizo3[2][posm3]; //armazenando na variável a multiplicação dos números daquela diagonal
        posit = posit + multpos; //com a várival que armazena a soma e que tem valor 0 ir acrescentando os valores das multiplicações para chegar ao final do loop e ter todos os resultados de multiplicação das diagonais somados
        posm1++; //aumentando o valor da variável da coluna do valor com linha 1, já que sua coluna apenas aumentará
        if(posm1=1){ //fazendo uma condição if para ver o que acontecerá com as colunas dos demais números, caso a coluna do número de linha 1 for 1, ou seja, o laço só tiver se repetido uma vez:
            posm2++; //o valor da coluna do número de linha 2 irá aumentar
            posm3 = 0; //o valor da coluna do número de linha 3 sairá de 2 para 0
        } else { //mas caso o valor da coluna de linha 1 não for 1, ou seja, já estivar na segunda repetição e última do laço:
            posm2 = 0; //o valor da coluna do número de linha 2 irá de 2 para 0
            posm3++; //o valor da coluna do número de linha 3 irá aumentar
        } 
    } while((posm1<3) && (posm2>=0) && (posm3>2)); //condição que irá dizer para o laço se repetir até que o num de colunas do valor de linha 1 seja menor que 3 e o num de colunas do de linha 2 seja maior ou igual a zero e o valor do número de colunas do do de linha 3 seja maior que 2, ou seja, até que número de colunas deles seja o número final de colunas que está naquela explicação da ideia que coloquei no começo

    do { //criando um loop do que fará a repetição para a multiplicação e soma das diagonais secundárias
        multneg = matrizo3[0][negm1] * matrizo3[1][negm2] * matrizo3[2][negm3]; //armazenando na variável a multiplicação dos números daquela diagonal
        negat = negat + multneg; //com a várival que armazena a soma e que tem valor 0 ir acrescentando os valores das multiplicações para chegar ao final do loop e ter todos os resultados de multiplicação das diagonais somados
        negm3++; //aumentando o valor da variável da coluna do valor com linha 3, já que sua coluna apenas aumentará
        if(negm3=1){ //fazendo uma condição if para ver o que acontecerá com as colunas dos demais números, caso a coluna do número de linha 3 for 1, ou seja, o laço só tiver se repetido uma vez:
            negm2++; //o valor da coluna do número de linha 2 irá aumentar
            negm1 = 0; //o valor da coluna do número de linha 1 sairá de 2 para 0
        } else { //mas caso o valor da coluna de linha 3 não for 1, ou seja, já estivar na segunda repetição e última do laço:
            negm2 = 0; //o valor da coluna do número de linha 2 irá de 2 para 0
            negm1++; //o valor da coluna do número de linha 1 irá aumentar
        }

    } while((negm1>2) && (negm2>=0) && (negm3<3)); //condição que irá dizer para o laço se repetir até que o num de colunas do valor de linha 3 seja menor que 3 e o num de colunas do de linha 2 seja maior ou igual a zero e o valor do número de colunas do do de linha 1 seja maior que 2, ou seja, até que número de colunas deles seja o número final de colunas que está naquela explicação da ideia que coloquei no começo


    determinanteo3 = posit - negat; //fazendo o resultado da soma das multiplicações das diagonais primárias menos o da soma das multiplicações das diagonais secundárias, já que as secundárias tem valor negativo
    return determinanteo3; //retonarnando o resultado do determinante de ordem 3
}
// MOSTRANDO AS MATRIZES E SEUS DETERMINANTES COM A TABELA 
// QUE ESTÁ NO CONTEÚDO DISPONIBILIZADO NO SIGAA

//mesmo processo utilizado para mostrar as matrizes da soma, só que nesse caso terá apenas 1 matriz e o outro fator apresentado é o determinante

document.write("<p>MATRIZ DE ORDEM 2:</p>");
document.write("<div class=container-fluid><div class=row>"); 

//MATRIZ ORDEM 2
document.write("<div class=col-sm-8><table width=130px class=tbcentro>");
for (i = 0; i < 2; i++) {
    var linha = "<tr>";
    for (j = 0; j < 2; j++) {
        linha = linha + "<td>" + matrizo2[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div><div class=col-sm-4><p>det = " + determinante2(matrizo2) + "</p></div></div></div>");
document.write("<br>");
//MATRIZ ORDEM 3
document.write("<p>MATRIZ DE ORDEM 3:</p>");
document.write("<div class=container-fluid><div class=row>"); 
document.write("<div class=col-sm-8><table width=170px class=tbcentro>");
for (i = 0; i < 3; i++) {
    var linha = "<tr>";
    for (j = 0; j < 3; j++) {
        linha = linha + "<td>" + matrizo3[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div><div class=col-sm-4><p>det = " + determinante3(matrizo3) + "</p></div></div></div>");
