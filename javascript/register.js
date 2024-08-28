const userRegData = [{
    
}]


    JSON.parse(localStorage.getItem('userData',(userRegData)));
    
    const submitBtnElement = document.querySelector('.jsSubmitBtn');
    submitBtnElement.addEventListener('click', () => {
          
   

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const userErrorMsgElem = document.querySelector('.userErrorMsg');
    const emailErrorMsgElem = document.querySelector('.emailErrorMsg');
    const passwordErrorMsgElem = document.querySelector('.passwordErrorMsg');
    const repeatPasswordErrorMsgElem = document.querySelector('.repeatPasswordErrorMsg')
    
    

    const passwordElement = document.querySelector('.jsInputPassword');
        passwordValue = passwordElement.value;
    const repeatPasswordElement = document.querySelector('.jsInputRepeatPassword')
        repeatPasswordValue = repeatPasswordElement.value;
    const emailElement = document.querySelector('.jsInputEmail');
        emailValue = emailElement.value;
    const termsAndConditionElem = document.querySelector('.jsCheckbox');
        termsAndConditionValue = termsAndConditionElem.checked;
    const usernameElement = document.querySelector('.jsInputUser');
        usernameValue = usernameElement.value;
    
        if(usernameValue === '' || usernameValue === null ){
            userErrorMsgElem.innerHTML = 'Username is required';
        }
           
        if(!emailValue.match(pattern)){
           emailErrorMsgElem.innerHTML = 'Invalid email';
        }

        if(passwordValue.length < 6){
            passwordErrorMsgElem.innerHTML = 'Password must be longer than 6'
        }

        if(passwordValue !== repeatPasswordValue){
            repeatPasswordErrorMsgElem.innerHTML = 'Password not matched';
        } 

        if(repeatPasswordElement.innerHTML == '' && passwordErrorMsgElem.innerHTML == '' &&  emailErrorMsgElem.innerHTML == '' && userErrorMsgElem.innerHTML == '' && termsAndConditionValue == true ){
            userRegData.push({usernameValue:usernameValue, emailValue:emailValue, passwordValue:passwordValue,})
            window.location='/html/login.html'
        }
                
        localStorage.setItem('userData', JSON.stringify(userRegData));
       
    });

        

    

    


