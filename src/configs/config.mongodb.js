'use strict'

const dev = {
    db: {
        password: process.env.DEV_DB_PW || 'hehehe'
    }
}

const config = { dev }

module.exports = config['dev']