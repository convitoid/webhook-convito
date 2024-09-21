const webhook = require('../../models/webhook.model');
const mytoken=process.env.MYTOKEN;//prasath_token

exports.updateWebhook = async function (req, res) {
    try {
        const response = {status:204, message:"Fail Update Webhook"}
        const body = req.body; // Mengambil body dari request
        console.log("Received POST request:", JSON.stringify(body, 2, null));
    
        const data = body.entry[0].changes[0].value.statuses[0];
        // console.log("Data:", data);
        const existingWebhooks = await webhook.webhookExist(data);
        if(existingWebhooks.length > 0){
            const updateWebhook = await webhook.updateWebhook(data)
            if (updateWebhook) {
                response.message = "Success Update Webhook"
                response.status = 200
                
            }
        }
        res.status(response.status).json(response);
    } catch (error) {
        console.error("Error parsing request body:", error);
        res.status(400).json({ message: "Failed to parse request body" });
    }
}

exports.getFromMeta = function(req, res) {
  const VERIFY_TOKEN = "secret";
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  console.log("Received GET request:", req.query, mode, token, challenge);

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Webhook verified successfully");
    res.status(200).send(challenge);
  } else {
    console.error("Failed to verify webhook");
    res.status(403).json({ message: "Failed to verify webhook" });
  }
}
