import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PaidIcon from "@mui/icons-material/Paid";

const routes = [
  {
    name: "Home",
    path: "/",
    component: <HomeIcon />,
  },
  {
    name: "Transactions",
    path: "/transactions",
    component: <PaidIcon />,
  },
  {
    name: "User",
    path: "/user",
    component: <PersonIcon />,
  },
  {
    name: "Settings",
    path: "/settings",
    component: <SettingsIcon />,
  },
];

export default routes;
