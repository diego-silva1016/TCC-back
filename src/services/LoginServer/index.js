const {companyRepository} = require("../../instancia");

class LoginService {
    login(email, password) {
        const company = companyRepository.getCompanyLogin(email, password)

        if(!company)
            throw new Error('Login invalido')

        return {...company, password: ''}
    }
}

module.exports = LoginService;
