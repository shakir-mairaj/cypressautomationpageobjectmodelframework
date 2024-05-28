import { registerAccountPage } from "../../pages/registerPage";
const registerObj = new registerAccountPage()
import registertestData from '../../fixtures/registertestdata.json'
describe('testRegistration',()=>{

    it('registerpageflow',()=>{

        registerObj.visitURL()
        registerObj.enterfirstName(registertestData.firstName)
        registerObj.enterlasttName(registertestData.lastName)
        registerObj.enterEmail(registertestData.email)
        registerObj.enterTelephone(registertestData.telephone)
        registerObj.enterPassword(registertestData.password)
        registerObj.selectcheckbox()
        registerObj.clickcontinue()

    })
})