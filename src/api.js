let BASE_URL = "https://goodgrammarbackend.onrender.com";
let TEST_AUTH = BASE_URL + "/test_auth";
let SUB_TIER = BASE_URL + "/user/get_subscription_tier";

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
};

export { API, BASE_URL, TEST_AUTH, SUB_TIER };
