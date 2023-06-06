async function expectToThrow(testBlock, withMessage) {

  try {
    await testBlock();
  } catch (e) {
    if (withMessage && !e.message.includes(withMessage)) {
      throw new Error(`Caught an expected error but message was different:\nExpected: ${withMessage}\nReceived: ${e.message}`)
    }

    const [firstLine] = e.message.split('\n', 1);
