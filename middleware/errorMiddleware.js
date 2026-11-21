const errorMiddleware = (err, req, res, next) => {

    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    if (err.name === "ValidationError") {
        statusCode = 400;
        message = Object.values(err.errors)
            .map(error => error.message)
            .join(", ");
    }

    if (err.code === 11000) {
        statusCode = 400;
        message = "SKU already exists";
    }

    if (err.name === "CastError") {
        statusCode = 400;
        message = "Invalid Product ID";
    }

    res.status(statusCode).json({
        success: false,
        message: message
    });
};

module.exports = errorMiddleware;