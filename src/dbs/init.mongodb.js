'use strict'

const { default: mongoose } = require('mongoose')
const { db: { password } } = require('../configs/config.mongodb')

// const connectionString = `mongodb://${host}:${port}/${name}`
const connectionString = `mongodb+srv://quytd:${password}@cluster0.8wk6agk.mongodb.net/`

class Database {

    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        if (1 === 1) { // Fake if using Dev env
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }
        mongoose.connect(connectionString).then(_ => {
            console.log(`Connected mongodb success`)
        })
            .catch(err => console.log(err))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongoDb = Database.getInstance()

module.exports = instanceMongoDb