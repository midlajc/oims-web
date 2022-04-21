import api from "./api";
import endpoints from "./endpoints";

const admissionService = {
  addApplicant: (applicantData) => {
    return api.post(endpoints.addApplicant, applicantData);
  },
  getApplicantList: async() => {
    return await api.get(endpoints.applicantList);
  },
};

export default admissionService;
