const User = require('../models/Schema')

async function homepage(req, res) {
    res.send('Hello from server')

}
async function profile(req, res) {
    res.send('profile route')
}
async function upload(req, res) {

    const data = req.body
    let newUser = new User({
        name: data.name,
        email: data.email,
        password: data.password
    })
    newUser.save()
    console.log(data)
    res.send(data)
}


module.exports = {
    homepage,
    profile,
    upload
}