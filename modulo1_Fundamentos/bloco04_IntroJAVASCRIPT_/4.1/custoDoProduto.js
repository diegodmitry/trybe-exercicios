/** 10. 
    Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

 */

    const custoProduto = 10;
    const valorVenda = 15;
    const impostoSobreOCusto = 20/100;

    const valorCustoTotal = custoProduto + impostoSobreOCusto;
    const lucro = valorVenda - valorCustoTotal;
    if (custoProduto < 0 || valorVenda < 0) {
      console.error(`O custo do seu produto está menor que 0 ou valor de venda está menor que 0`);
    } else {
      console.log(`A empresa terá de lucro R$${Math.floor(lucro * 1000)}`);
    }