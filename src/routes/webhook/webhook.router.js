const {updateWebhook, getFromMeta} = require('./webhook.controller')
const express = require('express')
const webhookRouter = express.Router()
webhookRouter.post('/', updateWebhook)
webhookRouter.get('/', getFromMeta)

module.exports = webhookRouter