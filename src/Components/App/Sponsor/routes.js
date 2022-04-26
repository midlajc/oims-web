import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PaidIcon from "@mui/icons-material/Paid";

const routes = [
  {
    name: "Home",
    path: "",
    component: <HomeIcon />,
  },
  {
    name: "Transactions",
    path: "",
    component: <PaidIcon />,
  },
  {
    name: "User",
    path: "",
    component: <PersonIcon />,
  },
  {
    name: "Settings",
    path: "",
    component: <SettingsIcon />,
  },
];

export default routes;
