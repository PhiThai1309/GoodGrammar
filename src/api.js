let BASE_URL = "https://goodgrammarbackend.onrender.com";

const API = {
  testAuthentication() {
    return BASE_URL + "/test_auth"; // GET
  },

  // Stripe
  openStripePortal() {
    return BASE_URL + "/stripe/stripe_portal"; // POST
  },
  createCheckOutSession() {
    return BASE_URL + "/stripe/checkout"; // POST
  },
  changeSubscription() {
    return BASE_URL + "/stripe/change_subscription"; // POST
  },
  testSubscriptionRequired() {
    return BASE_URL + "test_subscription_required"; // GET
  },

  // Users
  getUser(userId) {
    return BASE_URL + "/user/" + userId; // GET
  },
  getAllUsers() {
    return BASE_URL + "/user"; // GET
  },

  // Sub
  getSubTier() {
    return BASE_URL + "/user/get_subscription_tier"; //GET
  },

  // File
  getFileContent() {
    return BASE_URL + "/file/get_content"; // POST
  },
  uploadFile() {
    return BASE_URL + "/file/upload"; // POST
  },
  getFileInfo(fileId) {
    return BASE_URL + "/file/get_file_info?file_id=" + fileId; // GET
  },
  getFile(fileId) {
    return BASE_URL + "/file/get_file?file_id=" + fileId; // GET
  }
};

export { API };
