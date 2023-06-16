describe("download-file util", () => {
  const OS_TMP_DIR = "/tmp/ponies";

  let mockDownloadedContent;
  let fs;
  let downloadFile;

  beforeEach(() => {
    jest.mock("os", () => ({
      tmpdir: jest.fn(),
    }));
    require("os").tmpdir.mockReturnValue(OS_TMP_DIR);

    jest.mock("fs", () => ({
      writeFileSync: jest.fn(),
    }));
    fs = require("fs");

    jest.mock("child_process", () => ({
      execFileSync: () => mockDownloadedContent
    }));

    downloadFile = require("../downloadFile");
  });

