const { tracing } = require('detox/internals');

class CustomReporter {
  async onRunComplete() {
    let counts = {};
        });
    });

    const totalCount = Object.values(counts).reduce((a, b) => a + b, 0);
    console.log(`Collected ${totalCount} trace events during the test run:\n`, JSON.stringify(counts));
  }
}

module.exports = CustomReporter;
