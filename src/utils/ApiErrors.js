// these API errors are predefined in nodejs and it has defined
// all these errors in Error class which we have extended 
// and it gives us the status code , error message, stacktrace etc


class ApiError extends Error {
    constructor (
        statuscode,
        message = "something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message);
        this.statuscode = statuscode;
        this.errors = errors;
        this.sucess = false;
        this.data = null;

        if(stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.costructor);
        }
    }
}

export {ApiError};