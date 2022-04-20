import api from "./api";
import storageService from "./storageService";

const adminService = {
  addApplicant: (applicantData) => {
    return api.post("admin/admission/add-applicant", applicantData);
  },
};

export default adminService;
