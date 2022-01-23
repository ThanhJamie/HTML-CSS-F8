// Doi tuong validator
function Validator(options) {

    var selectorRule = {}

    function Validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMassage = rule.test(inputElement.value);

        var rules = selectorRule[rule.selector]
        for (let index = 0; index < rules.length; index++) {
            errorMassage = rules[index](inputElement.value);
            if (errorMassage) {
                break;
            }
        }

        if (errorMassage) {
            errorElement.innerText = errorMassage
            inputElement.parentElement.classList.add('invalid')
        } else {
            errorElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')
        }

        return !errorMassage
    }

    var formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFromValid = true;
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = Validate(inputElement, rule)
                if (!isValid) {
                    isFromValid = false;
                }
            });

            if (isFromValid) {
                // Truong hop submit voi javascipt
                if (typeof options.onSubmit === 'function') {
                    let enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        return (values[input.name] = input.value) && values;
                    }, {})
                    options.onSubmit(formValues)
                }else{
                    formElement.submit();
                }
            }
            // Truong hop submit voi hanh vi mac dinh
        }


        options.rules.forEach(function (rule) {
            if (Array.isArray(selectorRule[rule.selector])) {
                selectorRule[rule.selector].push(rule.test)
            } else {
                selectorRule[rule.selector] = [rule.test]
            }

            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                inputElement.onblur = function () {
                    Validate(inputElement, rule)
                    // console.log(inputElement.parentElement.querySelector(options.errorSelector););

                    inputElement.oninput = function () {
                        let errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                        errorElement.innerText = ''
                        inputElement.parentElement.classList.remove('invalid')
                    }
                }
            }
        })
    }
}

// Dinh nghia cac rule
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui long nhap lai'
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Truong nay phai la email'
        }
    }
}

Validator.minLength = function (selector, minLength) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= minLength ? undefined : `Vui long nhap toi thieu ${minLength} ki tu`
        }
    }
}

Validator.isConfirm = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Gia tri nhap vao khong chinh xac'
        }
    }
}