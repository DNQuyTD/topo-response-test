const app = require('./src/app');

const server = app.listen(3000, () => {
    console.log(`MSW eCommerce start with port ${3000}`);
})

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit Server Express`))
})