const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const moment = require('moment')

exports.updateWebhook = async function (data){
    console.log(data, "==================================Update Data");
    const findId = await prisma.webhook.findFirst({
        where: {
            waId: data.id,
            recipientId: data.recipient_id
        }
    })
    const result = await prisma.webhook.update({
        where: {
            id: findId.id
        },
        data:{
            lastUpdateStatus : moment.unix(data.timestamp).toISOString(),
            status: data.status,
            statusCode: data.errors ?  data.errors[0].code.toString() : "200",
            updatedAt: new Date()
        }
    })
    console.log(result, "==================================Result Update Data");

    return (result instanceof Object);
}

exports.webhookExist = async function(data){
    const reqData = await data
    const result = await prisma.webhook.findMany({
        where: {
            waId: reqData.id
        }
    })
    return result;
}
