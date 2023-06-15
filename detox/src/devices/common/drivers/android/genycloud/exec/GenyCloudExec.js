// @ts-nocheck
const exec = require('../../../../../../utils/childProcess').execWithRetriesAndLogs;

class GenyCloudExec {
  constructor(binaryPath) {
    this.binaryExec = `"${binaryPath}" --format compactjson`;
    process.env.GMSAAS_USER_AGENT_EXTRA_DATA = process.env.GMSAAS_USER_AGENT_EXTRA_DATA || 'detox';
  }

  getVersion() {
    return this._exec('--version');
  }

  whoAmI() {
    return this._exec('auth whoami');
  }

  getRecipe(name) {
    return this._exec(`recipes list --name "${name}"`);
  }
    return this._exec(`instances stop ${instanceUUID}`, options);
  }

  async _exec(args, options) {
    try {
      const rawResult = await this.__exec(args, options);
      return JSON.parse(rawResult);
    } catch (error) {
      throw new Error(error.stderr);
    }
  }

  async __exec(args, _options) {
    const options = {
      ..._options,
      statusLogs: {
        retrying: true,
      },
    };
    return (await exec(`${this.binaryExec} ${args}`, options )).stdout;
  }
}

module.exports = GenyCloudExec;
