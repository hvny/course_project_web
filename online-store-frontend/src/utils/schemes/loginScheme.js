const Joi = require('joi');

const loginScheme = Joi.object({
    phoneNumber: Joi.string().required().pattern(/^((\+7|7|8)+([0-9]){10})$/).messages({
        "string.pattern.base": "Поле обязательно к заполнению",
        "string.empty": "Поле обязательно к заполнению",
        "any.required": "Поле обязательно к заполнению",
    }),
    password: Joi.string().min(6).required().messages({
        "string.empty": "Поле обязательно к заполнению",
        "any.required": "Поле обязательно к заполнению",
        'string.min': "Минимальная длина поля — 6 символов"
    })
});

export default loginScheme;