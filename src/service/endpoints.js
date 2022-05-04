const endpoints = {
  //admission end points
  addApplicant: "/admission/add-applicant",
  applicantList: "/admission/applicant-list",
  primaryVerification: "admission/primary-verification",
  officerApproval: "admission/officer-approval",
  managerApproval: "admission/manager-approval",
  admittedStudents: "admission/admitted-students",

  //data end points
  boardOfStudies: "/data/board-of-studies",
  standards: "data/standards",
  gender: "data/gender",
  studentType: "data/student-type",

  //sponsor
  sponsorRegistration: "sponsor/sponsor-application",
  profile: "sponsor/profile",
  sponsorList: "sponsor/sponsor-list",
  sponsorships: "sponsor/sponsorships",
  fetchDues: "sponsor/fetch-dues",

  //students end points
  studentList: "students/student-list",

  //sponsorship end points
  newSponsorship: "sponsorships/new-sponsorship",
  sponsorshipList: "sponsorships/sponsorship-list",

  //sponsor payment apis
  payment: "sponsor/payment",

  //sponsor transaction apis
  sponsor: {
    transactions: "sponsor/transactions",
  },

  //accounts apis
  accounts: {
    transaction: "accounts/transactions",
  },
};

export default endpoints;
