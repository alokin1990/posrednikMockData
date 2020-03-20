module.exports = {
  userID: "usrIDSN2895864",
  aboutUser: {
    secret: "as34da!sdaer",
    name: "Marija",
    lastName: "Inkogntiovska",
    proffession: "Web Developer",
    student: true,
    email: "marijaIncognito@gmail.com",
    aboutMe:
      "Madison Blackstone is a director of brand marketing, with experience man"
  },
  workHistory: [
    {
      dateFrom: "_12.20.2023*",
      dateTo: "Current",
      jobTitle: "IOS DEVELOPER",
      company: "DumieData-!",
      dummie: true,
      responsabilities:
        "Backend Development, Frontentd Development, Server Management, Scored 20% increase in proffit"
    },
    {
      dateFrom: "12.20.2019",
      dateTo: "Current",
      jobTitle: "IOS DEVELOPER",
      company: "Apple INC.",
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
      city: "Skopje",
      dummie: true
    }
  ],
  contactInformation: {
    streetAddress: "Jane Sandanski 36/-14",
    city: "Skopje",
    country: "Aerodrom",
    zip: "1000",
    phone: "072 71 49 50",
    skills: "Hard Working, Organizational Skills, Team Skills, Office"
  },
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
  emergencyContact: [
    {
      contactPerson: "",
      phoneNummber: "",
      email: ""
    }
  ],
  applications: ["jobID"], // FIlter by active and arhived later
  interviews: ["JOBID"], // User can accept this jobs because he is already accepted by the company
  jobs: ["jobID"],
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
