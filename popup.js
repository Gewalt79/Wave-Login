const createAccountButton = document.getElementById('sign');
const createAccountForm = document.getElementById('popup')
const closePopup = document.getElementById('closePopup')


createAccountButton.addEventListener('click', ()=> {
createAccountForm.classList.add('display');
})

closePopup.addEventListener('click', ()=> {
    createAccountForm.classList.add('close')
    if (createAccountForm.classList.contains('display')){
        setTimeout(() => {
            createAccountForm.classList.remove('display')
            createAccountForm.classList.remove('close')
        }, 360);
    }
})