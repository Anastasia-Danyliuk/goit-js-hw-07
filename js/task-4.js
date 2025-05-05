const logInForm = document.querySelector('.login-form');

logInForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {
        [logInForm.elements.email.name]: logInForm.elements.email.value.trim(),
        [logInForm.elements.password.name]: logInForm.elements.password.value.trim(),
    };

    const formDataValues = Object.values(formData);

    if (formDataValues.includes('')) {
        alert('All form fields must be filled in!');

        return;
    }

    console.log(formData);

    logInForm.reset();
});
