class ResponseCodes {

    // Static constants for HTTP response codes
    static RESPONSE_CODES = {
      SUCCESS: 200,
      ACCEPTED: 201,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      PAYMENT_REQUIRED: 402,
      ACCESS_NOT: 403,
      NOT_FOUND: 404,
      NOT_ACCEPTABLE: 406,
      TIMEOUT: 408,
      CONFLICT: 409,
      LARGE_PAYLOAD: 413,
      UNPROCESSABLE_ENTITY: 422,
      TOO_MANY_REQUESTS: 429,
      SERVER_ERROR: 500,
      BAD_GATEWAY: 502
    }
  
    // Static constants for response messages
    static RESPONSE_MESSAGES = {
      SUCCESS: "Success",
      UPDATED: "Updated Successfully",
      CREATED: "Created Successfully",
      DELETED: "Deleted Successfully",
      NOT_FOUND: "Not found.",
      BAD_REQUEST: "Bad Request.",
      PAYMENT_REQUIRED: "Payment required.",
      ACCESS_NOT: "Forbidden, Access deined.",
      BAD_GATEWAY: "Request method not allowed.",
      UNPROCESSABLE_ENTITY: "Unprocessable entity.",
      TIMEOUT: "Request timeout.",
      LARGE_PAYLOAD: "Request payload too large.",
      SERVER_ERROR: "Internal server error.",
      MISSING_BODY: "Required value missing.",
      FILE_ERROR: "Error to process file",
      NOT_ACCEPTABLE: "Not Acceptable",
      EMAIL_ALREADY_REGISTERED: "Email Already Registered",
      TOO_MANY_REQUESTS: "Too many requests, please try again later.",
      CARD_ALREADY_EXIST: "Card Already Exist",
      ALREADY_EXIST: "Already Exist",
      LINK_SENT: "A link has been successfully sent to your registered email address.",
      SOMETHING_WENT_WRONG: "Something went wrong.",
      PASSWORD: {
        NOT_SAME: "Password and Confirm Password fields must match",
        INCORRECT: "Password is Incorrect"
      },
      UNAUTHORIZED: "Failed to authenticate because of bad credentials or invalid authorization details."
    }
  
    // Static responses based on predefined response codes and messages
    static RESPONSES = {
      SUCCESS: {
        status: this.RESPONSE_CODES.SUCCESS,
        message: this.RESPONSE_MESSAGES.SUCCESS
      },
      CREATED: {
        status: this.RESPONSE_CODES.ACCEPTED,
        message: this.RESPONSE_MESSAGES.CREATED
      },
      UPDATED: {
        status: this.RESPONSE_CODES.SUCCESS,
        message: this.RESPONSE_MESSAGES.UPDATED
      },
      NOT_FOUND: {
        status: this.RESPONSE_CODES.NOT_FOUND,
        message: this.RESPONSE_MESSAGES.NOT_FOUND
      },
      BAD_REQUEST: {
        status: this.RESPONSE_CODES.BAD_REQUEST,
        message: this.RESPONSE_MESSAGES.BAD_REQUEST
      },
      PAYMENT_REQUIRED: {
        status: this.RESPONSE_CODES.PAYMENT_REQUIRED,
        message: this.RESPONSE_MESSAGES.PAYMENT_REQUIRED
      },
      ACCESS_NOT: {
        status: this.RESPONSE_CODES.ACCESS_NOT,
        message: this.RESPONSE_MESSAGES.ACCESS_NOT
      },
      BAD_GATEWAY: {
        status: this.RESPONSE_CODES.BAD_GATEWAY,
        message: this.RESPONSE_MESSAGES.BAD_GATEWAY
      },
      NOT_ACCEPTABLE: {
        status: this.RESPONSE_CODES.NOT_ACCEPTABLE,
        message: this.RESPONSE_MESSAGES.NOT_ACCEPTABLE
      },
      TIMEOUT: {
        status: this.RESPONSE_CODES.TIMEOUT,
        message: this.RESPONSE_MESSAGES.TIMEOUT
      },
      LARGE_PAYLOAD: {
        status: this.RESPONSE_CODES.LARGE_PAYLOAD,
        message: this.RESPONSE_MESSAGES.LARGE_PAYLOAD
      },
      SERVER_ERROR: {
        status: this.RESPONSE_CODES.SERVER_ERROR,
        message: this.RESPONSE_MESSAGES.SERVER_ERROR
      },
      FILE_ERROR: {
        status: this.RESPONSE_CODES.BAD_GATEWAY,
        message: this.RESPONSE_MESSAGES.FILE_ERROR
      },
      UNPROCESSABLE_ENTITY: {
        status: this.RESPONSE_CODES.UNPROCESSABLE_ENTITY,
        message: this.RESPONSE_MESSAGES.MISSING_BODY
      },
      LINK_SENT: {
        status: this.RESPONSE_CODES.SUCCESS,
        message: this.RESPONSE_MESSAGES.LINK_SENT
      },
      ALREADY_EXIST: {
        status: this.RESPONSE_CODES.CONFLICT,
        message: this.RESPONSE_MESSAGES.ALREADY_EXIST
      },
      SOMETHING_WENT_WRONG: {
        status: this.RESPONSE_CODES.BAD_REQUEST,
        message: this.RESPONSE_MESSAGES.SOMETHING_WENT_WRONG
      },
      TOO_MANY_REQUESTS: {
        status: this.RESPONSE_CODES.TOO_MANY_REQUESTS,
        message: this.RESPONSE_MESSAGES.TOO_MANY_REQUESTS
      }
    }
  }
  
  module.exports = ResponseCodes