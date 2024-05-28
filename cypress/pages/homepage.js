export class homepage
{
    pagelocators=
    {
        inputsearch:'input[name="search"]',
        searchbutton:'.btn.btn-default.btn-lg',
        product:'img[title="MacBook"]',
        addtocart:'Add to Cart',
        successmessage:'div.alert.alert-success.alert-dismissible'

    }

    searchProduct(productname)
    {
        cy.get(this.pagelocators.inputsearch).type(productname)
        cy.get(this.pagelocators.searchbutton).click()
    }
    addtoCart()
    {
        cy.contains(this.pagelocators.addtocart).first().click()

    }

    verifysuccessmessage()
    {
        return cy.get(this.pagelocators.successmessage)
    }
}