const { uuid } = require("uuidv4");

class CompanyRepository {
 constructor(){
    this.companys = []
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

  getAllCompanys() {
    return this.companys;
  }

  getCompany(id) {
    return this.companys.find(c => c.id === id);
  }

  deleteCompany(id) {
    this.companys = this.companys.filter(c => c.id !== id);
  }
}

module.exports = CompanyRepository;
