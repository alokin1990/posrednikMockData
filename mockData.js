const routes = require("./routes/index");

const Application = routes.Application;
const Company = routes.Company;
const User = routes.User;
const Interview = routes.Interview;
const jobs = routes.Job;

Object.keys(routes).forEach(el =>
  console.log(el.toUpperCase(), "_DATA:", JSON.stringify(routes[el], null, 1))
);
module.exports = {
  Application,
  Company,
  User,
  Interview,
  jobs
};
