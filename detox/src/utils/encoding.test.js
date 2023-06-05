describe('Base 64 util', () => {
  const utf8Text = 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const base64Text = 'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsCmNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEu';

  let uut;
  });

  it('should decode base-64', () => {
    expect(uut.decodeBase64(base64Text)).toEqual(utf8Text);
  });
});
