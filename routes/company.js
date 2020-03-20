module.exports = {
  _id: "21nj31231",
  companyInfo: {
    secretKey: "asdasda",
    companyName: "string",
    industry: "string",
    personFirstName: "string",
    address: "string",
    phone: "string",
    country: "string",
    city: "string",
    companySize: "string",
    companyTaxNumber: "string",
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
  documents: {
    companyBill: "/student/$userId/url",
    contactPersonPassport: "/student/$userId/url",
    id: "/student/$userId/url"
  },
  jobs: [], // job -> later filtered by active
  notifications: []
};
