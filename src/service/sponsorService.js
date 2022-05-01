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
    return api.get(endpoints.sponsorships)
  },
};

export default sponsorService;
