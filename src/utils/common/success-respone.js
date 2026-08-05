const createSuccessResponse = (message = "Request completed successfully", data = {}) => ({
    success: true,
    message,
    data,
    error: {},
});

module.exports = createSuccessResponse;