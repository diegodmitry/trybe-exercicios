# 9.3

## O que aprendi?

Como testar códigos assíncronos e como reaproveitar configurações entre testes, podendo separá-las por escopo.


## Sou capaz de:

* Escrever testes para códigos assíncronos utilizando async/await;

* Reaproveitar configurações para diversos testes por meio do uso de beforeEach e afterEach;

* Dividir as configurações dos seus testes, em blocos separados, por meio do uso de describe.


## Por que é importante?

* Códigos assíncronos são comuns em JavaScript , e você certamente vai precisar escrevê-los com frequência, e consequentemente testá-los. Por exemplo, quando você faz uma chamada a uma API para buscar dados, você está fazendo uma requisição assíncrona.

* Repetir código é ruim, pois você pode se enganar ao tentar replicar exatamente o mesmo código, além de escrever mais do que precisa. Pensando neste problema, no conteúdo de hoje, você vai aprender algumas formas de configurar e escrever testes, evitando repetições e gerando um código mais limpo.

* Poder organizar melhor o ambiente de testes por meio da divisão em blocos, evitando repetição de código e facilitando na escrita e leitura dos testes.
