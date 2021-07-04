const bcrypt = require("bcrypt")
const AdminBro = require("admin-bro")
const AdminBroExpress = require("@admin-bro/express")
const AdminBroMongoose = require("@admin-bro/mongoose")
const Underwear = require("../models/underwear")
const Order = require("../models/order")
const User = require("../models/user")
AdminBro.registerAdapter(AdminBroMongoose)
const adminBro = new AdminBro({
    resources: [Underwear, Order, User],
})

const adminRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (username, password) => {
        const user = await User.findOne({ username })
        if (user) {
            const matched = await bcrypt.compare(password, user.passwordHash)
            if (matched) return user
        }
        return false
    },
    cookiePassword: process.env.SECRET,
})

module.exports = adminRouter
