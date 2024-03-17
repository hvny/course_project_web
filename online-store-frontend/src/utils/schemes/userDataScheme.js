const Joi = require('joi');

const userDataScheme = Joi.object({
    firstName: Joi.string().required().messages({
        "string.empty": "Поле обязательно к заполнению",
        "any.required": "Поле обязательно к заполнению",
    }),
    phoneNumber: Joi.string().required().pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/).messages({
        "string.pattern.base": "Данные должны соответствовать формату: 8 777 66 55",
        "string.empty": "Поле обязательно к заполнению",
        "any.required": "Поле обязательно к заполнению",
    }),
    email: Joi.string().required().pattern(/[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-z]{2,4}$/).messages({
        "string.pattern.base": "Данные должны соответствовать формату: example@example.ru",
        "string.empty": "Поле обязательно к заполнению",
        "any.required": "Поле обязательно к заполнению",
    }),
});


export default userDataScheme