export class registerAccountPage{

pagelocators={

    firstName:'#input-firstname',
    lastName:'#input-lastname',
    email:'#input-email',
    telephone:'#input-telephone',
    password:'#input-password',
    confirmpassword:'#input-confirm',
    checkboxclick:'input[type="checkbox"]',
    continuebutton:'input[type="submit"]'
}

visitURL()
{
    cy.visit(Cypress.env('URL'))
}


enterfirstName(Fname)
{
    cy.get(this.pagelocators.firstName).type(Fname)
}
enterlasttName(Lname)
{
    cy.get(this.pagelocators.lastName).type(Lname)
}
enterEmail(Email)
{
    cy.get(this.pagelocators.email).type(Email)
}
enterTelephone(phone)
{
    cy.get(this.pagelocators.telephone).type(phone)
}
enterPassword(password)
{
    cy.get(this.pagelocators.password).type(password)
    cy.get(this.pagelocators.confirmpassword).type(password)
}
selectcheckbox()
{
    cy.get(this.pagelocators.checkboxclick).check()
}
clickcontinue()
{
    cy.get(this.pagelocators.continuebutton).click()
}
}