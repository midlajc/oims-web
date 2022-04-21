import api from "./api";
import endpoints from "./endpoints";

const dataService = {
  getBoardOfStudies: () => {
    return api.get(endpoints.boardOfStudies);
  },
  getStandards: (_id) => {
    return api.get(endpoints.standards + _id);
  },
  getGenders: () => {
    return api.get(endpoints.gender);
  },
  getStudentType:()=>{
      return api.get(endpoints.studentType)
  }
};

export default dataService;
