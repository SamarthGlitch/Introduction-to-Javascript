function validate(e){
    e.preventDefault();

    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const age=document.getElementById('age').value;
    const msgBox=document.getElementById('message');

    let message='';

    if (email === ''){
        message = 'Please Enter an Email';
    
    } else if (password === ''){
        message = 'Password must be at least 8 characters';

    } else if (age === ''){
        message = 'Age must be between 12 and 50';

    } else{
        message='Login Successful';
        msgBox.style.color='green';
    }
    msgBox.innerText=message;
}