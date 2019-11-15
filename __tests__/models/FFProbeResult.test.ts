import { FFProbeResult } from '../../src/models/FFProbeResult';

const exampleOutput = require('./example-ffprobe-output.json');

describe('models', () => {
  describe('FFProbeResult', () => {
    it('Should correctly convert ffprobe output', () => {
      const result = new FFProbeResult(exampleOutput);
      expect(result).toEqual({
        audio: [
          {
            bitRate: 160000,
            channelLayout: "stereo",
            channels: 2,
            sampleRate: 44100
          }
        ],
        bitrate: 1334445,
        duration: 90001,
        video: [
          {
            bitRate: 1167864,
            frameRate: 25,
            resolution: {
              height: 720,
              width: 1280
            }
          }
        ]
      });
    });
  });
});
