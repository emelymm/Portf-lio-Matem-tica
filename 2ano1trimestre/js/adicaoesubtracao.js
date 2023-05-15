// CRIANDO A MATRIZES DE MESMO TAMANHO PARA SOMA E SUBTRAÇÃO
var matriz1 = new Array(); //cria a matriz 1 principal que será utilizada
var matriz2 = new Array(); //cria a matriz 2 principal que será utilizada
var numcol = parseInt(Math.random() * 5) + 1; //declara uma váriavel do número de colunas(número de casas dentro de cada matriz) 
//que vai gerar um número aleatório inteiro de colunas de 1 a 5
var numlin = parseInt(Math.random() * 5) + 1; //declara uma váriavel do número de linhas(número de matrizes dentro da matriz principal) 
//que vai gerar um número aleatório inteiro de linhas de 1 a 5

// GERANDO VALORES DAS 2 MATRIZES
for ( var i = 0; i < numlin; i++) { //fazendo um laço de repetição que irá criar as matrizes interiores que serão as linhas
    var matrizinterna1 = new Array(); //repetindo a criação da matriz interna 1 até dar o número de linhas gerado
    var matrizinterna2 = new Array(); //repetindo a criação da matriz interna 2 até dar o número de linhas gerado
    for ( var j = 0; j < numcol; j++) { //fazendo um laço de repetição para colocar valores dentro do número de colunas gerado
        var valor1 = parseInt(Math.random() * 50); //criando os valores que serão colocados na matriz 1
        var valor2 = parseInt(Math.random() * 50); //criando os valores que serão colocados na matriz 2
        matrizinterna1[j] = valor1; //colocando os valores aleatórios dentro da matriz interna 1
        matrizinterna2[j] = valor2; //colocando os valores aleatórios dentro da matriz interna 2
    }
    matriz1.push(matrizinterna1); //colocando a matriz interna (linhas) dentro da matriz 1
    matriz2.push(matrizinterna2); //colocando a matriz interna (linhas) dentro da matriz 2
}

console.table(matriz1);
console.table(matriz2);

// FAZENDO A FUNÇÃO SOMA
function soma(matriz1, matriz2) { //função para retornar a matriz que terá a soma
    var matrizsoma = new Array(); //criando a matriz que guardará os valores da soma
    for ( var m1 = 0; m1 < numlin; m1++ ) { //laço de repetição para a criação das linhas da matriz soma
        var matrizsinterna = new Array(); //repetindo a criação da matriz interna da soma (linhas)
        for ( var m2 = 0; m2 < numcol; m2++ ) { //laço de repetição para a criação de colunas
            matrizsinterna[m2] = matriz1[m1][m2] + matriz2[m1][m2]; //fazendo a soma dos valores, sendo que o número de linhas e colunas das matrizes deve ser o mesmo para a soma daquele valor daquela posição
        }
        matrizsoma.push(matrizsinterna); //colocando a matriz interna (linha) dentro da matriz soma
    }
    return matrizsoma;
}

console.table(soma(matriz1, matriz2));

//FAZENDO A FUNÇÃO SUBTRAÇÃO
function subtrai(matriz1, matriz2) { //função para retornar a matriz que terá a subtração
    var matrizsubtracao = new Array(); //criando a matriz que guardará os valores da subtração
    for ( var m1 = 0; m1 < numlin; m1++ ) { //laço de repetição para a criação das linhas da matriz subtração
        var matrizsubinterna = new Array(); //repetindo a criação da matriz interna da subtração (linhas)
        for ( var m2 = 0; m2 < numcol; m2++ ) { //laço de repetição para a criação de colunas
            matrizsubinterna[m2] = matriz1[m1][m2] - matriz2[m1][m2]; //fazendo a subtração dos valores, sendo que o número de linhas e colunas das matrizes deve ser o mesmo para a subtração daquele valor daquela posição
        }
        matrizsubtracao.push(matrizsubinterna); //colocando a matriz interna (linha) dentro da matriz subtração
    }
    return matrizsubtracao;
}

console.table(subtrai(matriz1, matriz2));

// MOSTRANDO AS MATRIZES E RESULTADOS DA SOMA COM A TABELA 
// QUE ESTÁ NO CONTEÚDO DISPONIBILIZADO NO SIGAA, PORÉM ADICIONANDO A PARTE
// DO BOOTSTRAP

document.write("<div class=container-fluid><div class=row>"); //fazendo as divs responsivas para que as matrizes fiquem lado a lado na hora de mostrar
//MOSTRANDO MATRIZ 1
document.write("<div class=col-sm-3><table width=170px>"); //definindo a div onde a matriz irá ficar e sua tabela
for (i = 0; i < numlin; i++) { //repetindo o número de linhas da matriz
    var linha = "<tr>"; //colocando a tag tr de tabela dentro da linha, para que cada vez que uma linha for criada ela fique dentro da tr e seus valores fiquem lado a lado
    for (j = 0; j < numcol; j++) { //repetindo o número de colunas da matriz
        linha = linha + "<td>" + matriz1[i][j] + "</td>"; //colocando o valor que a linha já tem mais a tag td onde fica cada valor mais o valor que irá naquela tag td e após o fechamento da tag td
    }
    linha = linha + "</tr>" //fechando a linha que foi gerada dentro do laço de repetição anterior
    document.write(linha); //mostrando a linha
}
document.write("</table></div><div class=col-sm-1><p class=centro> + <p></div>");//mostrando o fechamento da tabela e da div e a abertura e fechamento de uma nova div onde ficará o símbolo +

//MOSTRANDO MATRIZ 2
document.write("<div class=col-sm-3><table width=170px>");  //fazendo o mesmo processo feito na matriz 1
for (i = 0; i < numlin; i++) {
    var linha = "<tr>";
    for (j = 0; j < numcol; j++) {
        linha = linha + "<td>" + matriz2[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div><div class=col-sm-1><p class=centro> = <p></div>"); //fazendo o mesmo processo da matriz 1 porém sustituindo o símbolo + por = já que agora será mostrada a matriz resultado
//MOSTRANDO MATRIZ SOMA
document.write("<div class=col-sm-3><table width=170px>"); //fazendo a mesma coisa da matriz 1
for (i = 0; i < numlin; i++) {
    var linha = "<tr>";
    for (j = 0; j < numcol; j++) {
        linha = linha + "<td>" + soma(matriz1, matriz2)[i][j] + "</td>"; //fazendo a mesma coisa da matriz 1 porém chamando a função soma para que possa mostrar os resultados da soma das matrizes
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div>");

document.write("</div></div>");

document.write("<br>");
document.write("<p>&nbsp;&nbsp;&nbsp;SUBTRAÇÃO:<p>");

// MOSTRANDO AS MATRIZES E RESULTADOS DA SUBTRAÇÃO COM A TABELA 
// QUE ESTÁ NO CONTEÚDO DISPONIBILIZADO NO SIGAA, PORÉM ADICIONANDO A PARTE
// DO BOOTSTRAP

//Exatamene a mesma coisa da soma, apenas trocando os símbolos de + para - e utilizando a função subtrai no lugar da função soma
document.write("<div class=container-fluid><div class=row>"); 

//MOSTRANDO MATRIZ 1
document.write("<div class=col-sm-3><table width=170px>");
for (i = 0; i < numlin; i++) {
    var linha = "<tr>";
    for (j = 0; j < numcol; j++) {
        linha = linha + "<td>" + matriz1[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div><div class=col-sm-1><p class=centro>-<p></div>");

//MOSTRANDO MATRIZ 2
document.write("<div class=col-sm-3><table width=170px>");
for (i = 0; i < numlin; i++) {
    var linha = "<tr>";
    for (j = 0; j < numcol; j++) {
        linha = linha + "<td>" + matriz2[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div><div class=col-sm-1><p class=centro>=<p></div>");
//MOSTRANDO MATRIZ SUBTRACAO
document.write("<div class=col-sm-3><table width=170px>")
for (i = 0; i < numlin; i++) {
    var linha = "<tr>";
    for (j = 0; j < numcol; j++) {
        linha = linha + "<td>" + subtrai(matriz1, matriz2)[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table></div>");

document.write("</div></div>");











/*
//TESTE DE SOMA COM MATRIZES CRIADAS
//Declarando variáveis de ADIÇÃO
var matriz = new Array();
var matriz2 = new Array();
var soma = new Array();

//Colocando os valores
soma.push([0, 0, 0, 0]);
soma.push([0, 0, 0, 0]);
matriz.push([1, 2, 3, 4]);
matriz.push([5, 6, 7, 8]);
matriz2.push([10, 20, 30, 40]);
matriz2.push([50, 60, 70, 80]);

//Função para somar os números
function somam(matriz, matriz2) {
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            soma[i][j] = matriz[i][j] + matriz2[i][j];
        }
    }
    return soma;
}

//Chamando a função
somam(matriz, matriz2);

//Mostrando a matriz do resultado de ADIÇÃO
document.write("<table>");
for (i = 0; i < soma.length; i++) {
    var linha = "<tr>";
    for (j = 0; j < soma[i].length; j++) {
        linha = linha + "<td>" + soma[i][j] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

*/
