# Exercicios
 ## Parte 1 - Instalação e configuração
  ### Instalação
  1. Instalação do Git
  ```sudo apt-get install git-all```
  
  ### Configuração
  O primeiro passo é configurar sua identidade, seu nome e endereço de e-mail, isso é importante pois cada commit usa esta informação, e ela é carimbada de forma imutável nos commits que você criar. Para configurar isso digite o comando abaixo em seu terminal: 
  ```git config --global user.name "Seu nome"
  git config --global user.email seuemail@exemplo.br```

  ### Editor
  Um outro ponto legal de se configurar é o editor onde você poderá abrir o arquivo de configuração do Git , .gitconfig , fica fácil de você visualizar as configurações do Git e também adicionar outras que julgue necessário. Para isso execute o comando à seguir no seu terminal: 
  ```git config --global core.editor "code --wait"```
 
  ### Verificando a instalação e a configuração
  Vamos fazer uma validação e verificar se tudo está certinho! 😉 
  No terminal:
  Digite ```git --version``` para saber qual versão do git está instalada.
  O comando ```git config --list``` vai retornar: ``` user.mail, user.name e o core.editor```

  ## Parte 2 - Criar conta no GitHub

  ## Parte 3 - Adicionando uma chave SSH na sua conta do GitHub
  ### Gerando uma chave SSH
  1. Abra seu terminal e digite o comando abaixo. Ele cria uma nova chave SSH, usando o seu email como rótulo.
  ```ssh-keygen -t rsa -b 4096 -C seuemail@email.com```
  2. Durante o processo irá aparecer escrito no terminal Enter a file in which to save the key , quando isso acontecer pressione Enter para aceitar a localização padrão /home/you/.ssh/id_rsa . 
  3. AO pedir a senha, digite a sua escolha:
  ```Enter passphrase (empty for no passphrase): [Type a passphrase]
  Enter same passphrase again: [Type passphrase again]```

  ### Adicionando sua chave SSH ao ssh-agent
  1. Primeiro você deve iniciar o ssh-agent em background:
  ```eval "$(ssh-agent -s)"```
  2. Agora você deve adicionar sua chave privada SSH ao ssh-agent . Para isso execute o comando abaixo no terminal:
  ```ssh-add ~/.ssh/id_rsa```

  ### Adicionando a chave SSH na sua conta do GitHub
  Antes de tudo você deve copiar a sua chave SSH. Para isso, você vai aprender um comando bem útil, mas que nem sempre vem instalado nativamente no Linux: o xclip . 
  ```
  # Como o xclip não vem instalado por padrão na maioria das distribuições,
  # precisaremos instalá-lo usando o comando a seguir:
  sudo apt-get install xclip

  # Agora utilize o comando abaixo para copiar o conteúdo da sua chave id_rsa.pub
  # Para garantir que o conteúdo foi copiado dê Ctrl + V em um editor de texto
  xclip -sel clip < ~/.ssh/id_rsa.pub```
  
  Caso o xclip não funcione, execute o comando abaixo e copie manualmente a saída do terminal. 
  ```cat ~/.ssh/id_rsa.pub```

  Entre no seu GitHub e siga os passos abaixo:
  * No canto superior direito do GitHub , clique na sua foto de perfil e clique em Settings;
  * Na barra lateral esquerda, clique em SSH and GPG keys;
  * Clique em New SSH key ou Add SSH key;
  * No campo Título , adicione um descrição para a nova chave;
  * Cole sua chave dentro do campo Key;
  * Clique em Add SSH key;
  * Caso seja solicitado, confirme sua senha do Github.
  
  Research source: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

  ## Parte 4 - O seu repositório no GitHub
  Foram praticados os comandos:
  ```git init
     git add .
     git commit -m 'Message'```
  Criado um repositório público no GItHub e adicionado a URL ao repositório local
  ```git remote add origin "URL_DO_REPOSITÓRIO"```
  Verificado se está certo a URL remota
  ```git remote -v```
  Agora que tudo está devidamente configurado e verificado
  ```git push origin master```

