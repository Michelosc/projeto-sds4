# DSVendas 

# Sobre o projeto

https://dsvendas-michelosc.netlify.app/

DSVendas é uma aplicação full stack web construída durante a 5ª edição da **Semana DevSuperior** (#sds5), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um sistema de controle de vendas, onde os dados são exibidos em um dashboard mostrando a quantidade e o sucesso de vendas dos usuários cadastrados.

## Layout web
![Web 1](https://github.com/Michelosc/projeto-sds4/blob/main/assets/Screenshot%20from%202021-09-14%2022-29-53.png)

![Web 2](https://github.com/Michelosc/projeto-sds4/blob/main/assets/Screenshot%20from%202021-09-14%2022-29-57.png)

## Modelo conceitual
![Modelo Conceitual](https://raw.githubusercontent.com/devsuperior/bds-assets/main/sds/sds3-mc.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Spring Security
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- Apex Charts
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/Michelosc/projeto-sds4.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/Michelosc/projeto-sds4.git

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor
Michel de Oliveira Santos Corrêa

https://www.linkedin.com/in/michel-corr%C3%AAa-3268a113a/

## Licença

Este projeto está sob a licença [MIT](./LICENSE).
