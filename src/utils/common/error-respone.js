const createErrorResponse = (message = "Request failed", error = {}) => ({
    success: false,
    message,
    data: {},
    error,
});

module.exports = createErrorResponse;