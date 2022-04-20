import api from "./api";
import endpoints from "./endpoints";

const adminService = {
  addApplicant: (applicantData) => {
    return api.post(endpoints.addApplicant, applicantData);
  },
};

export default adminService;
