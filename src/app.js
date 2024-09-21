// const path = require('path')
const morgan = require('morgan')
const express = require('express')
const webhookRouter = require('./routes/webhook/webhook.router')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
// const dashboardRouter = require('./routes/dashboard/dashboard.router')
const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use('/webhook', webhookRouter)
app.get('/', async (req, res) => {
    const result = await prisma.webhook.findMany()
    res.status(200).json(result)
})
// app.use('/dashboard', dashboardRouter)


module.exports = app