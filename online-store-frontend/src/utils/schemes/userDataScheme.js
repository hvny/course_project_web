const Joi = require('joi');

const userDataScheme = Joi.object({
    firstName: Joi.string().pattern(/^[a-zA-Zа-яА-Я]+$/).min(2).max(20).required().messages({
        "string.pattern.base": "Поле может содержать только буквы",
        "string.empty": "Поле обязательно к заполнению",
        "any.required": "Поле обязательно к заполнению",
        "string.min": "Минимальная длина поля — 2 символа",
        "string.max": "Максимальная длина поля — 20 символов"
    }),
    phoneNumber: Joi.string().required().pattern(/^((\+7|7|8)+([0-9]){10})$/).messages({
        "string.pattern.base": "Данные не соответствуют формату",
        "string.empty": "Поле обязательно к заполнению",
        "any.required": "Поле обязательно к заполнению",
    }),
});

export default userDataScheme;