const httpErrorCodes = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

class HttpError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.name = httpErrorCodes[code] ?? "unknown";
  }
}

module.exports = HttpError;
