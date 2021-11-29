# 9.1

## O que aprendi?

Páginas da web não existem sozinhas. Elas carregam imagens, iframes, conteúdo ou recuperam todo tipo de informações de outros lugares que não seus próprios servidores. E depender de algo externo ao seu sistema para fazer algo traz uma problemática: e se o serviço do qual eu dependo sair do ar? E se os servidores dele estiverem lentos? O que acontece com minha página?

Numa lógica normal, sequencial de programação, sua página esperaria o serviço dar retorno ou voltar ao ar para continuar. A página ficaria quebrada, ou teria todo o seu carregamento freado em função de um problema totalmente fora do seu controle. 

Para lidar com esse problema e outros de natureza similar, existe um conceito que é muito poderoso e presente no JavaScript : a assincronicidade.

Em vez de o programa ser carregado todo em sequência, uma linha após a outra, linhas que podem trazer esse tipo de problema podem "ficar carregando", enquanto o resto do seu programa executa normalmente. A execução dessa linha, a espera pela disponibilidade desse serviço, corre paralelamente ao desenvolver do restante do código. É uma execução assíncrona.

Aprendi três conceitos importantes:

* Operações assíncronas;

* callbacks;

* Testes com callbacks utilizando o Jest.


## Sou capaz de:

* Aplicar corretamente operações assíncronas;

* Utilizar callbacks corretamente;

* Utilizar o Jest para testar suas callbacks.


## Por que é importante?

Um exemplo clássico: são 20h de uma segunda-feira, você está em casa com fome e decide pedir uma pizza. 🍕 Você fica esperando, sem fazer nada, enquanto a pizza não chega? Você pode fazer o que quiser nesse meio tempo, como escutar música ou ver vídeos no YouTube , por exemplo. E assim que a pizza chegar, você dedica seu tempo para poder jantar.

Nesse exemplo da pizza, e é importantíssimo, o ato de pedir a pizza corresponde a uma operação assíncrona, e os atos de escutar música e ver vídeos no YouTube são exemplos de operações que independem de pedir a pizza.

