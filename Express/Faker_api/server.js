const express = require("express")
const faker = require("faker")
const app = express()


class User{
    constructor(){
        this._id=faker.datatype.uuid()
        this.firsName=faker.name.firstName()
        this.lastName=faker.name.lastName()
        this.phoneNumber=faker.phone.phoneNumber()
        this.email=faker.internet.email()
        this.password=faker.internet.password()
    }
}
class Company{
    constructor(){
        this._id=faker.datatype.uuid()
        this.name=faker.company.companyName()
        this.address={
            street:faker.address.streetAddress(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
}

app.get("/api/users/new", ( req, res ) => {
    const user = new User()
    res.json(user)
})

app.get("/api/companies/new", ( req, res ) => {
    const company = new Company()
    res.json(company)
})

app.get("/api/user/company", ( req, res ) => {
    const user = new User()
    const company = new Company()
    res.json({user, company})

})

app.listen(8000)