const Joi = require('joi');

const userAddressScheme = Joi.object({
    city: Joi.string().pattern(/^[a-zA-Zа-яА-Я]+$/).min(2).max(20).required().messages({
        "string.pattern.base": "Поле может содержать только буквы",
        "string.empty": "Поле обязательно к заполнению",
        "any.required": "Поле обязательно к заполнению",
        "string.min": "Минимальная длина поля — 2 символа",
        "string.max": "Максимальная длина поля — 20 символов"
    }),
    street: Joi.string().required().pattern(/^[a-zA-Zа-яА-Я]+$/).messages({
        "string.pattern.base": "Поле может содержать только буквы",
        "string.empty": "Поле обязательно к заполнению",
        "any.required": "Поле обязательно к заполнению",
    }),
    houseNumber: Joi.string().required().pattern(/^\d+$/).messages({
        "string.pattern.base": "Поле может содержать только числа",
        "string.empty": "Поле обязательно к заполнению",
        "any.required": "Поле обязательно к заполнению",
    }),
    entry: Joi.string(),
    floor: Joi.string(),
    apartment: Joi.string(),
});

export default userAddressScheme;