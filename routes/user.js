module.exports = {
  userID: "usrIDSN2895864",
  secret: "",
  locked: "",
  student: false,
  verified: false,
  passsword: "",
  userInfo: {
    name: "Marija",
    lastName: "Inkogntiovska",
    proffession: "Web Developer",
    aboutMe:
      "Madison Blackstone is a director of brand marketing, with experience man",
    passport: "Macedonian"
  },
  workHistory: [
    {
      dateFrom: "_12.20.2023*",
      dateTo: "Current",
      jobTitle: "IOS DEVELOPER",
      company: "DumieData-!",
      responsabilities:
        "Backend Development, Frontentd Development, Server Management, Scored 20% increase in proffit"
    }
  ],
  education: [
    {
      dateFrom: "_12.20.2023*",
      dateTo: "Current",
      title: "Bachelor of Software Engineering",
      university: "Ss. Cyril and Methodius University*-",
      country: "Skopje",
    }
  ],
  skills: ["Hard Working", "Organizational Skills", "Team Skills", "Office"],
  languages: [
    {
      language: "English",
      proficiency: "A1"
    },
    {
      language: "German",
      proficiency: "C1"
    }
  ],
  contactInformation: {
    streetAddress: "Jane Sandanski 36/-14",
    city: "Skopje",
    country: "Aerodrom",
    zip: "1000",
    phone: "072 71 49 50",
    email: "marijaIncognito@gmail.com"
  },
  emergencyContact: [
    {
      contactPerson: "",
      phoneNummber: "",
      email: ""
    }
  ],
  socialMedia: {
    facebook: "url",
    linkedin: "url",
    instagram: "url",
  },
 
  applications: [
    {
      appID: "",
      userID: "",
      jobID: "",
    } //applications -> point with ids
  ],
  notifications: [
    {userId: "", userName: "Admin", msg: "Rabotodavecot ve prifati, platete gi troskovite za da se vrabotite"}
  ],
  jobs: [{jobId: "", hired: "true"}],
  documents: {
    passport: "/student/$userId/url",
    studentDoc: "/student/$userId/url",
    id: "/student/$userId/url",
    diplomas: {
      languages: ["/student/$userId/diplomas/url"],
      education: ["/student/$userId/diplomas/url"],
      certificates: ["/student/$userId/diplomas/url"]
    }
  }
};
