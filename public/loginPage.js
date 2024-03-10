'use strict';

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
    console.log('data', data);

    ApiConnector.login(data, (response) => {
        console.log(response);

        if(response) {
            location.reload();  //обновить страницу
        } else {
            userForm.setLoginErrorMessage(message);
        }
    });
}

userForm.registerFormCallback = (data) => {
    console.log('data', data);

    ApiConnector.register(data, (response) => {
        console.log(response);

        if(response) {
            location.reload();  
        } else {
            userForm.setRegisterErrorMessage(message);
        }
    });
}