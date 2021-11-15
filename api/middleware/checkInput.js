const yup = require('yup');
const Auth = require('../Auth/auth-model');

const registerCheck = yup.object({
    password: yup.string().min(3).required(),
    email: yup.string().email().required(),
    role: yup.number().required(),
    first_name: yup.string().min(3).required(),
    last_name: yup.string().min(3).required(),
    bio: yup.string().min(3).required(),
    phone: yup.string().min(3).required(),
    birthday: yup.string().min(3).required(),
})

const checkCreateAccount = async (req, res, next) => {
    try {
        const validate = await registerCheck.validate(req.body, { stripUnknown: true })
        req.body = validate
        next()
    } catch (err) {
        res.status(400).json({message: err.message })
    }
}
const checkEmailUnique = async (req, res, next) => {
    Auth.getByEmail(req.body.email.toLowerCase())
      .then(data => {
        if (data) {
          res.status(400).json({message:`email ${req.body.email.toLowerCase()} is taken`})
        } else {
          next()
        }
      })
      .catch(next)
  }

module.exports = {checkCreateAccount,checkEmailUnique}