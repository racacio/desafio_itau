const fs = require('fs');
exports.handler = async (event) => {
    try
    {
        const data = fs.readFileSync('./data.json');
        // TODO implement
        const response = {
            statusCode: 200,
            body: JSON.stringify(JSON.parse(data)),
        };
        return response;
    }
    catch(err){
        return {
            statusCode: 403,
            body: JSON.stringify(err.message)
        }
    }
};