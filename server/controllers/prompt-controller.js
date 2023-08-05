const openai = require('../src/configs/openai');

module.exports = {
    async sendText(req, res){
        const openaiAPI = openai.Configuration();
        
        try {
            const response = await openaiAPI.createCompletion(
                openai.textCompletion("me conte uma piada")
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