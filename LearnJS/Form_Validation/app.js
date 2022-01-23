// Doi tuong validator
function Validator (options) {
    var formElement = document.querySelector(options.form);

    if (formElement){
        console.log(options.rule);
    }
}

// Dinh nghia cac rule
Validator.isRequired = function () {
    return 1;
}

Validator.isEmail = function () {
    return 2
}