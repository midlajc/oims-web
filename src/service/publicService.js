import api from "./api";
import endpoints from "./endpoints";

const publicService = {
  getGenders: () => {
    return api.get(endpoints.public.gender);
  },
  sponsorRegistration: (data) => {
    return api.post(endpoints.public.sponsorRegistration, data);
  },
};

export default publicService;
