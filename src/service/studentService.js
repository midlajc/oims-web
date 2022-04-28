import api from "./api";
import endpoints from "./endpoints";

export default {
    studentList:()=>{
        return api.get(endpoints.studentList)
    }
}