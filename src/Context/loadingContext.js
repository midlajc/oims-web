import { createContext } from "react";

const loadingContext = createContext({ leading: true, setMode: () => {} });

export default loadingContext;
