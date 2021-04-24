# Desafio PFA Docker

## Descrição do desafio
Crie um programa utilizando sua linguagem de programação favorita que faça uma listagem simples do nome de alguns módulos do curso Full Cycle os trazendo de um banco de dados MySQL. Gere a imagem desse container e a publique no DockerHub.

Gere uma imagem do nginx que seja capaz que receber as solicitações http e encaminhá-las para o container.

Crie um repositório no github com todo o fonte do programa e das imagens geradas.

Crie um arquivo README.md especificando quais comandos precisamos executar para que a aplicação funcione recebendo as solicitações na porta 8080 de nosso computador. Lembrando que NÃO utilizaremos Docker-compose nesse desafio.

## Utilizando as imagens prontas
### Criar networking
```bash
  docker network create pfa-desafio
```
### Docker Mysql
```bash
  docker run --name mysql-desafio-pfa --network pfa-desafio -e MYSQL_DATABASE=fullcycle -e MYSQL_ROOT_PASSWORD=123456 -v $(pwd)/mysql:/var/lib/mysql -d mysql
```
### Docker Node
```bash
  docker run --name node-desafio-pfa --network pfa-desafio -d ianmateus/node-desafio-pfa
```
### Docker Nginx
```bash
  docker run --name nginx-desafio-pfa --network pfa-desafio -p 8080:80 ianmateus/nginx-desafio-pfa
```

## Criando suas proprias imagens
### Criar networking
```bash
  docker network create pfa-desafio
```

### Docker Mysql
Crie o container da imagem do mysql:
```bash
  docker run --name mysql-desafio-pfa --network pfa-desafio -e MYSQL_DATABASE=fullcycle -e MYSQL_ROOT_PASSWORD=123456 -v $(pwd)/mysql:/var/lib/mysql -d mysql
```

### Docker Node
Para o build da aplicação node, entre na pasta `node` e execute o comando abaixo substituindo `username` por seu nome de usuario docker:
```bash
  docker build -t username/node-desafio-pfa .
```

Execute o container substituindo `username` por seu nome de usuario docker:
```bash
  docker run --name node-desafio-pfa --network pfa-desafio -d username/node-desafio-pfa
```

### Docker Nginx
Para o build da aplicação nginx, entre na pasta `nginx` e execute o comando abaixo substituindo `username` por seu nome de usuario docker:
```bash
  docker build -t username/nginx-desafio-pfa .
```

Execute o container substituindo `username` por seu nome de usuario docker:
```bash
  docker run --name nginx-desafio-pfa --network pfa-desafio -p 8080:80 username/nginx-desafio-pfa
```
