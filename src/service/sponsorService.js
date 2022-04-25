import api from "./api";
import endpoints from "./endpoints";

export default {
  getSponsorApplication: () => {
    return api.get(endpoints.sponsorRegistration);
  },
};
