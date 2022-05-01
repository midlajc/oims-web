import api from "./api";
import endpoints from "./endpoints";

export default {
  sponsorshipList: () => {
    return api.get(endpoints.sponsorshipList);
  },
};
