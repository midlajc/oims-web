import api from "./api";
import endpoints from "./endpoints";

const accountsService = {
  fetchTransactions: () => {
    return api.get(endpoints.accounts.transaction);
  },
};

export default accountsService;
