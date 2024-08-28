const loginElement = document.querySelector('.login-btn');

    loginElement.addEventListener('click', () => {

        const password = JSON.parse(((localStorage.getItem('passworddata'))));
        const email = JSON.parse(((localStorage.getItem('emaildata'))));
        
        
        const emailElement = document.querySelector('.email');
        const emailValue = emailElement.value;
        const passElement = document.querySelector('.pass');
        const passValue = passElement.value;
        let emailReqElem = document.querySelector('.email-required');
        let passReqElem = document.querySelector('.password-required');
       /* 
        if(emailValue === 'admin123@test.com' && passValue === 'admin123' ){
            window.location='profile.html' 
        } else if ( emailValue !== 'admin123@test.com' && passValue === 'admin123'){
            emailReqElem.innerHTML =`<p class="email-required">Invalid Email.</p>`
            passReqElem.innerHTML = `<p class="email-required"></p>`
        } else if ( emailValue !== 'admin123@test.com' && passValue === 'admin123'){
            emailReqElem.innerHTML =`<p class="email-required">Email is incorrect</p>`
            passReqElem.innerHTML = `<p class="email-required"></p>`
        } else if (emailValue === 'admin123@test.com' && passValue == '' ){
            passReqElem.innerHTML = `<p class="email-required">Please input password.</p>`
            emailReqElem.innerHTML =`<p class="email-required"></p>`
        } else if (emailValue === 'admin123@test.com' && passValue !== 'admin123' ){
            passReqElem.innerHTML = `<p class="email-required">Password is incorrect</p>`
            emailReqElem.innerHTML =`<p class="email-required"></p>`  
        } else if (emailValue == '' && passValue == '') {
            emailReqElem.innerHTML =`<p class="email-required">Please enter an email address.</p>`
            passReqElem.innerHTML = `<p class="email-required"></p>`
        } else if (emailValue == '' && passValue !== 'admin123'){
            emailReqElem.innerHTML =`<p class="email-required">Please enter an email address.</p>`
            passReqElem.innerHTML = `<p class="email-required"></p>`
        } else if (emailValue == '' && passValue !== 'admin123') {
            emailReqElem.innerHTML =`<p class="email-required">Invalid Email.</p>`
            passReqElem.innerHTML = `<p class="email-required">Input Password</p>`
        } else if (emailValue !== 'admin123@test.com' && passValue == ''){
            emailReqElem.innerHTML =`<p class="email-required">Invalid Email.</p>`
            passReqElem.innerHTML = `<p class="email-required"></p>`
        } else if (emailValue == '' && passValue == 'admin123'){
            emailReqElem.innerHTML =`<p class="email-required">Please input an email.</p>`
            passReqElem.innerHTML = `<p class="email-required"></p>`
        } else if (emailValue !== 'admin123@test.com' && passValue !== 'admin123'){
            emailReqElem.innerHTML =
                `<p class="email-required">Invalid Email.</p>`
            passReqElem.innerHTML = 
                `<p class="email-required"></p>`
        }
    */
        let isPasswordStored = password.includes(passValue);
        const isEmailStored = password.includes(emailValue);
       
        if(password.includes(passValue) === true && email.includes(emailValue) === true){
            window.location='/html/dashboard.html'
        } else if (email.includes(emailValue) === false){
            emailReqElem.innerHTML =
                `<p class="email-required">Invalid Email.</p>`
        } else if (password.includes(passValue) === false){
            passReqElem.innerHTML = `<p class="password-required">Wrong password</p>`
        }
                
            
    });