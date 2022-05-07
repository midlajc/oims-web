import api from "./api";
import endpoints from "./endpoints";

const sponsorService = {
  getSponsorApplication: () => {
    return api.get(endpoints.sponsorRegistration);
  },
  getProfile: () => {
    return api.get(endpoints.profile);
  },
  getSponsorList: () => {
    return api.get(endpoints.sponsorList);
  },
  getSponsorshipList: () => {
    return api.get(endpoints.sponsorships);
  },
  getDues: () => {
    return api.get(endpoints.fetchDues);
  },
  createNewPayment: (amount) => {
    return api.get(endpoints.payment, {
      params: { amount: amount },
    });
  },
  verifyPayment: (data) => {
    return api.post(endpoints.payment, data);
  },
  getTransactions: () => {
    return api.get(endpoints.sponsor.transactions);
  },
  approveSponsorApplication: (data) => {
    return api.put(endpoints.sponsor.sponsorRegistration, data);
  },
};

export default sponsorService;
