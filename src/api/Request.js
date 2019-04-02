import requestHelper from "./RequestHelper";
import errorHandler from "./errorHandler";

function request(options) {
  console.log(options)
  return requestHelper(options).catch(error => {
        console.log(error)
  });
}

const Request = {
  get(options) {
    return request({ method: "GET", options });
  },

  post(options) {
    return request({ method: "POST", options });
  },

  put(options) {
    return request({ method: "PUT", options });
  },

  patch(options) {
    return request({ method: "PATCH", options });
  },

  delete(options) {
    return request({ method: "DELETE", options });
  }
};

export default Request;
