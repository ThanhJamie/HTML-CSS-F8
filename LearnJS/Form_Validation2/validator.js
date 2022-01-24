function Validator(formSelector) {
    let formRule = {}
    let validatorRule = {
        required: function(value) {
            return value ? undefined : `Vui lòng nhập trường này`
        },
        email: function(value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Trường này không phải là email'
        },
        min: function(min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`
            }
        },   
        max: function(max) {
            return function (value) {
                return value.length < max ? undefined : `Vui lòng nhập nhiều nhất ${min} kí tự`
            }
        }   
    }

    var rulename = 'required'
    console.log(validatorRule[rulename]);
    // Lấy element trong DOM theo Seletor
    let formElement = document.querySelector(formSelector);

    // Chỉ xử lí khi có Element trong DOM
    if (formElement) {
        let inputs = formElement.querySelectorAll("[name][rules]")
        
        for(var input of inputs) {
            var rules = input.getAttribute("rules").split("|");

            for(var rule in rules) {
                console.log(rule);
            }

            formRule[input.name] = input.getAttribute("rules")
        }
        // console.log(formRule);  
    }
}