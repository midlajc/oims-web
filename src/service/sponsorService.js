import api from "./api";
import endpoints from "./endpoints";

const sponsorService= {
  getSponsorApplication: () => {
    return api.get(endpoints.sponsorRegistration);
  },
};

export default sponsorService
