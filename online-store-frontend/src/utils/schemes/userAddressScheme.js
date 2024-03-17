const Joi = require('joi');

const userAddressScheme = Joi.object({
    city: Joi.string().required(),
    street: Joi.string().required(),
    homeNumber: Joi.string().required(),
    entrance: Joi.string().required(),
    floor: Joi.string().required(),
    apartment: Joi.string().required(),


});


export default userAddressScheme