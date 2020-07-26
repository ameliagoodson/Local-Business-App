import axios from "axios";

export default {
  // Gets all emails
  sendEmail: function (emailData) {
    return axios.post("/api/email", emailData);
  },
};
