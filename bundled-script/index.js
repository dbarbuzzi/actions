const core = require('@actions/core')
const exec = require('@actions/exec')

async function main() {
  core.info(`__dirname=${__dirname}`);
  core.info("Running 'script.sh'...");
  await exec.exec(`${__dirname}/script.sh`);
}

main().catch(err => core.setFailed(err.message));
