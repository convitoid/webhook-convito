const http = require('http')
const app = require('./app.js')
const PORT = process.env.APP_PORT || 5000 // Gunakan PORT yang disediakan oleh Heroku atau fallback ke 3000 jika tidak ada
const server = http.createServer(app)
async function startServer() {
    server.listen(PORT, () => {
        console.log(`Listening on port:${PORT}...`)
    })
}
startServer()