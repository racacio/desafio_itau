const fibonacci = (n) => {
    if (n === 1) {
        return [0,1];
    } else {
        const arr = fibonacci(n -1);
        arr.push(arr[arr.length - 1] + arr[arr.length -2]);
        return arr;
    }
}
exports.handler = async (event) => {
    try
    {
        let response = {};
        const numero = event.queryStringParameters?.numero ?? null;
        if (numero && !isNaN(numero)) {
            const data = fibonacci(numero);
            // TODO implement
            response = {
                statusCode: 200,
                body: JSON.stringify(data),
            };
        } else {
            response = {
                statusCode: 403,
                body: JSON.stringify('PARAMETER INCORRECT'),
            };
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
