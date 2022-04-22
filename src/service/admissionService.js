import api from "./api";
import endpoints from "./endpoints";

const admissionService = {
  addApplicant: (applicantData) => {
    return api.post(endpoints.addApplicant, applicantData);
  },
  getApplicantList: () => {
    return api.get(endpoints.applicantList);
  },
  getPrimaryVerificationList: () => {
    return api.get(endpoints.primaryVerification);
  },
  getManagerApprovalList: () => {
    return api.get(endpoints.managerApproval);
  },
  getOfficerApprovalList: () => {
    return api.get(endpoints.officerApproval);
  },
};

export default admissionService;
