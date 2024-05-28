import { homepage } from "../../pages/homepage";
const homepageobj = new homepage()
import testdata from '../../fixtures/testdata.json'

describe('testautomation', ()=>{
    before(()=>{
        cy.login(testdata.login.username, testdata.login.password)
    })

    it('add to cart', ()=>{
        homepageobj.searchProduct(testdata.product.productName)
        homepageobj.addtoCart()
        homepageobj.verifysuccessmessage().should('contain', testdata.message.successMessage)

    })
})