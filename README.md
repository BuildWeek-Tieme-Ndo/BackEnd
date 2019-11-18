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
| /api/register | {<br> name: 'required/unique',<br> password: 'required/unique', <br> email: 'required/unique'<br>} | {<br> status: 201 - Created, <br> message: success message<br>} |
| /api/login | {<br> email: 'required',<br> password: 'required'<br>} | {<br> status: 200 - OK, <br> message: success message,<br>payload: token<br>} |

