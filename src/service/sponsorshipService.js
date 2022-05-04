import api from "./api";
import endpoints from "./endpoints";

const sponsorshipService={
  sponsorshipList: () => {
    return api.get(endpoints.sponsorshipList);
  },
}

export default sponsorshipService;
