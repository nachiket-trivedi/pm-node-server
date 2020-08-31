const userData = require("./src/config/userData");
let { githubId } = userData;
const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL =
  "https://github.com/" + githubId + "/" + githubId + ".github.io.git";

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
