exports.updateWebhook = function (data) {
    let result = {
        status : 200,
        data : data,
        message : 'success',
    };

    if(!data instanceof Object) {
        result = {
            status : 204,
            data : [],
            message : 'Empty Data',
        }
        return result;
    }

    return result;
}
