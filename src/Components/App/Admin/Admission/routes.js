import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PeopleIcon from "@mui/icons-material/People";

const routes = [
  {
    name: "Applicant List",
    path: "/admission/applicant-list",
    component: <FormatListBulletedIcon sx={{ fontSize: 50, color: "black" }} />,
  },
  {
    name: "Primary Verification",
    path: "/admission/primary-verification",
    component: <PersonIcon sx={{ fontSize: 50, color: "black" }} />,
  },
  {
    name: "Officer Approval",
    path: "/admission/officer-approval",
    component: <CheckCircleIcon sx={{ fontSize: 50, color: "black" }} />,
  },
  {
    name: "Campus Manager Approval",
    path: "/admission/manager-approval",
    component: <ThumbUpIcon sx={{ fontSize: 50, color: "black" }} />,
  },
  {
    name: "Admitted Students",
    path: "/admission/admitted-students",
    component: <PeopleIcon sx={{ fontSize: 50, color: "black" }} />,
  },
];

export default routes;
