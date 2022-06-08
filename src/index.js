const core = require("@actions/core");
export function handler() {
  console.log("running handler");
  const apiKey = core.getInput("techcore-api-key");
  core.setOutput("TECHCORE_IMAGE_REPO", "MYCUSTOMREPO");
  //authenticate using basic
  //authenticate using api key
  // POST /realease
}

const IS_GITHUB_ACTION = !!process.env.GITHUB_ACTIONS || process.env.DEBUG;

if (IS_GITHUB_ACTION) {
  console.error = (msg) => console.log(`::error::${msg}`);
  console.warn = (msg) => console.log(`::warning::${msg}`);
} else {
  handler();
}
