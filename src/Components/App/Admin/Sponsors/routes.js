import HowToRegIcon from '@mui/icons-material/HowToReg';
import GroupIcon from '@mui/icons-material/Group';

const routes = [
  {
    name: "Sponsor Registration",
    path: "/sponsors/sponsor-registration",
    component: <HowToRegIcon sx={{ fontSize: 50, color: "black" }} />,
  },
  {
    name: "Sponsor List",
    path: "/sponsors/sponsor-list",
    component: <GroupIcon sx={{ fontSize: 50, color: "black" }} />,
  },
];

export default routes;
