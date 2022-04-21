import api from "./api";
import endpoints from "./endpoints";

const admissionService = {
  addApplicant: (applicantData) => {
    return api.post(endpoints.addApplicant, applicantData);
  },
};

export default admissionService;
