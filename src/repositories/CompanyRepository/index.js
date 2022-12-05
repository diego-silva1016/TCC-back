const { uuid } = require("uuidv4");

class CompanyRepository {
 constructor(){
    this.companys = [{
      id: 1,
      email: 'teste@teste.com',
      password: '123456',
      vinculouCertificado: false
    }]
  }

  findDocument(document) {
    const findCompany = this.companys.find(c => c.documento === document);

    return findCompany;
  }

  create(companyData) {
    companyData.id = uuid()

    this.companys.push(companyData);

    return companyData;
  }

  updateCompany(company) {
    const index = this.companys.findIndex(c => c.id === company.id);

    this.companys[index] = company;

    return company
  }

  updateCompanyCertificate(id) {
    const index = this.companys.findIndex(c => c.id === id);

    this.companys[index].vinculouCertificado = true;

    return this.companys[index]
  }

  getAllCompanys() {
    return this.companys;
  }

  getCompany(id) {
    return this.companys.find(c => c.id === id);
  }

  getCompanyLogin(email, password) {
    return this.companys.find(c => c.email === email && c.password === password);
  }

  deleteCompany(id) {
    this.companys = this.companys.filter(c => c.id !== id);
  }
}

module.exports = CompanyRepository;
