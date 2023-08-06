const openai = require('../configs/openai');
const inputPrompt = require('../configs/input');
module.exports = {
    async sendText(req, res){
        const openaiAPI = openai.Configuration();
        const inputPrompt = new inputPrompt(req.body);
        try {
            const response = await openaiAPI.createCompletion(
                openai.textCompletion(`${inputPrompt}`)
            )
            return res.status(200).json({
                sucess: true,
                data: response.data.choices[0].text
            });
        } catch (error) {
            return res.status(500).json({
                sucess: false,
                error: error.response ? error.response : "Eita, deu erro" 

            })
        }
    }
}