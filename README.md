# Conversor de moedas

<h3 align="center">
  Challenge Currency
</h3>

<p align="center">
  <a href="#about">About the challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

##  About the challenge

implement a Rest API that is capable of converting between two currencies using updated conversion rates from an external service.

To perform the conversion, you need the user ID that you want to perform the conversion.



## Install

Install dependency

  yarn

Create database sqlite

  yarn knex migrate:latest



### Application features


The API must register each conversion transaction with all related information and also provide an endpoint for consulting the transactions carried out by a user.

 Create User

    Post http://localhost:3333/users

    {
        "name": "Guilherme",
        "email": "gui@gui.com.br",
        "password": "106518"
    }

 Transactions for user (BRL, USD, EUR, JPY)

    post http://localhost:3333/currency/:id

    {
        "originCurrency": "BRL",
        "originValue": 500,
        "destinyCurrency": "USD"
    }

 List transactions for user

    get http://localhost:3333/currency/:id
