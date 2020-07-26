import axios from "axios";

export default {
  // Gets all books
  sendEmail: function (emailData) {
    return axios.post("/api/email", emailData);
  },
};
