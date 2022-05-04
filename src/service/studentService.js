import api from "./api";
import endpoints from "./endpoints";

const studentService = {
  studentList: () => {
    return api.get(endpoints.studentList);
  },
};

export default studentService;
