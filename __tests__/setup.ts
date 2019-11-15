const exampleOutput = require('./models/example-ffprobe-output.json');

export const mockedFFProbe = jest.fn().mockImplementation(() => {
  return exampleOutput;
});

jest.mock('../src/modules/FFProbe', () => {
  return {
    default: mockedFFProbe,
  };
});

jest.mock('../src/modules/Logger');