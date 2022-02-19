function generateReqHeader() {
    logger.debug(__filename + ': Generate request header for REST call');
    return {
        // 'X-Correlation-Id': '', // Better to generate one and send which will be helpful while debugging
        'channel': 'web',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
}

function generateReqObj(caller, req, reqObj) {
    const reqBody = (reqObj && reqObj.reqBody) ? reqObj.reqBody : {},
        reqHeaders = generateReqHeader();
    logger.debug(__filename + ': Generate reqObj for REST call with url=' + url);

    return {
        url: caller.url,
        method: caller.method || 'GET', //Default method is GET if caller does not set with method type
        headers: reqHeaders,
    };
}

module.exports = {
    generateReqObj
}