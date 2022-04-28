import api from "./api";
import endpoints from "./endpoints";

const sponsorService= {
  getSponsorApplication: () => {
    return api.get(endpoints.sponsorRegistration);
  },
  getProfile:()=>{
    return api.get(endpoints.profile)
  }
};

export default sponsorService
