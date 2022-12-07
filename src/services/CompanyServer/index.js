const { uuid } = require("uuidv4");
const {companyRepository} = require("../../instancia");

class CompanyService {
   create(company) {
    const companyExist = companyRepository.findDocument(company.documento);

    if (companyExist) throw new Error('Empresa já cadastrada.');

    company.id = uuid()
    return companyRepository.create(company);
  }

  updateCompany(company) {
    return companyRepository.updateCompany(company)
  }

  setCertificateCompany(id) {
    const company = companyRepository.updateCompanyCertificate(id)

    return {...company, password: ''}
  }

  getCompany() {
    return companyRepository.getAllCompanys()
  }

  getCompany(id) {
    return companyRepository.getCompany(id)
  }

  deleteCompany(id) {
    return companyRepository.deleteCompany(id)
  }
}

module.exports = CompanyService;
