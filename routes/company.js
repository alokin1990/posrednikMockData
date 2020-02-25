module.exports = {
  companyInfo: {
    secretKey: "asdasda",
    companyID: "comIDSN3959593495",
    companyName: "string",
    industry: "string",
    personFirstName: "string",
    address: "string",
    phone: "string",
    country: "string",
    city: "string",
    companySize: "string",
    companyIdNumber: "string",
    email: "string",
    password: "string",
    verified: true
  },
  contactInformation: {
    streetAddress: "Jane Sandanski 36/-14",
    city: "Skopje",
    country: "Aerodrom",
    zip: "1000",
    phone: "072 71 49 50",
    languages: ["English", "Albanian"]
  },
  emergencyContact: [{ contactPerson: "", phoneNummber: "", email: "" }],
  interviews: [
    {
      interviewID: "intIDSN21315", //= interview + jobID ?
      jobID: "",
      jobTitle: "Kitchen Worker",
      companyId: "23",
      companyPersonName: "Mark",
      companyPersonLstName: "Trenz",
      userId: "5asdasdas",
      userFirstName: "Nikola",
      userLastName: "Efremovski",
      msgs: [Array]
    }
  ],
  documents: {
    companyBill: "/student/$userId/url",
    contactPersonPassport: "/student/$userId/url",
    id: "/student/$userId/url"
  },
  jobs: [], // job -> later filtered by active
  notifications: []
};
