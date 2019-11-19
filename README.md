[![GitHub issues](https://img.shields.io/github/issues/BuildWeek-Tieme-Ndo/BackEnd)](https://github.com/BuildWeek-Tieme-Ndo/BackEnd)
[![GitHub forks](https://img.shields.io/github/forks/BuildWeek-Tieme-Ndo/BackEnd)](https://github.com/BuildWeek-Tieme-Ndo/BackEnd)
[![GitHub stars](https://img.shields.io/github/stars/BuildWeek-Tieme-Ndo/BackEnd)](https://github.com/BuildWeek-Tieme-Ndo/BackEnd)
[![GitHub license](https://img.shields.io/github/license/BuildWeek-Tieme-Ndo/BackEnd)](https://github.com/BuildWeek-Tieme-Ndo/BackEnd)


# Tieme-Ndo BackEnd

## Table of Contents

- [About](#about)
- [Tables](#tables)
- [Routes](#routes)

## About 

    Tieme Ndo aims to tackle hunger in Ghana by empowering rural farmers with access to capital. 
    
    This project is a hypothetical backend for an internal app;employees of Tieme Ndo could use
     the app to manage their clients and client loans in one location, easily accessible from anywhere. 
     
     The backend is hosted at https://tiemendo.herokuapp.com/

## Tables

## Routes

### Onboarding Routes

|     Route     |               Input Data               | Expected Return |
| ------------- | -------------------------------------- | --------------- |
| **POST** /api/register | {<br> name: 'required/unique',<br> password: 'required/unique', <br> email: 'required/unique'<br>} | {<br> status: 201 - Created, <br> message: success message<br>} |
| **POST** /api/login | {<br> email: 'required',<br> password: 'required'<br>} | {<br> status: 200 - OK, <br> message: success message,<br>payload: token<br>} |

### Client Routes (Auth Token in Header Required)
|     Route     |               Input Data               | Expected Return |
| ---------------- | -------------------------------------- | --------------- |
| **POST** /api/auth/clients | {<br>name: 'required, unique'<br>village: 'optional'<br>user_id:'required'<br>goal: 'optional'<br>harvest: 'optional'<br>} | {<br>status: 201 - Create<br>payload: newly added client<br>} |
|**GET** /api/auth/clients | N/A | {<br>status: 200 - OK<br>payload: [array of clients]<br>} |
| **GET** api/auth/clients/:id | N/A | {<br>status: 200 - OK<br>payload: client<br>} |
|**PUT** api/auth/clients/:id | {<br>name: 'required, unique'<br>village: 'optional'<br>user_id:'required'<br>goal: 'optional'<br>harvest: 'optional'<br>} | {<br>status: 200 - OK<br>payload: client<br>} |
| **DELETE** api/auth/clients/:id | N/A | {<br>status:200 - OK<br>message: success message<br>} |

### Loan Routes (Auth Token in Header Required)
|     Route     |               Input Data               | Expected Return |
| ---------------- | -------------------------------------- | --------------- |
| **POST** /api/auth/loans | {<br>client_id: 'required'<br>loan_amt: 'required'<br>init_date:'required'<br>due_date: 'required'<br>} | {<br>status: 201 - Create<br>payload: newly added loan<br>} |
|**GET** /api/auth/loans | N/A | {<br>status: 200 - OK<br>payload: [array of loans]<br>} |
| **GET** api/auth/loans/:id | N/A | {<br>status: 200 - OK<br>payload: loan<br>} |
|**PUT** api/auth/loans/:id | {<br>client_id: 'required'<br>loan_amt: 'required'<br>init_date:'required'<br>due_date: 'required'<br>} | {<br>status: 200 - OK<br>payload: loan<br>} |
| **DELETE** api/auth/loans/:id | N/A | {<br>status:200 - OK<br>message: success message<br>} |



