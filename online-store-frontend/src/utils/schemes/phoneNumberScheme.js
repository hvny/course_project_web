const Joi = require('joi');

const phoneSchema = Joi.object({
    phone: Joi.string()
        .required()
        .pattern(/^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/)
        .message('Номер телефона должен быть в формате +7(xxx)xxx-xx-xx или 7xxx-xx-xx-xx или 8xxx-xx-xx-xx'),
});


export default phoneSchema