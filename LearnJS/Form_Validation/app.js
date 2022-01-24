// Doi tuong validator
function Validator(options) {

    var selectorRule = {}

    function getParent(element,selector) {
        while (element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    function Validate(inputElement, rule) {
        var errorElement = getParent(inputElement,options.formGroupSeletor).querySelector(options.errorSelector);
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
                        values[input.name] = input.value
                        return values;
                    }, {})
                    options.onSubmit(formValues)
                } else {
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
            return value.trim() ? undefined : 'Vui lòng nhập lại'
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Trường này không phải là email'
        }
    }
}

Validator.minLength = function (selector, minLength) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= minLength ? undefined : `Vui lòng nhập tối thiểu ${minLength} kí tự`
        }
    }
}

Validator.isConfirm = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}