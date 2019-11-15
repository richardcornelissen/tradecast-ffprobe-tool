import { IFFProbeOutput } from './IFFProbeOutput';

interface IAudioStream {
  bitRate: number;
  channelLayout: string;
  channels: number;
  sampleRate: number;
}

interface IVideoStream {
  bitRate: number;
  frameRate: number;
  resolution: {
    height: number;
    width: number;
  }
}

export class FFProbeResult {
  audio: IAudioStream[];
  bitrate: number;
  duration: number;
  video: IVideoStream[];

  constructor(input: IFFProbeOutput) {
    this.bitrate = +input.format.bit_rate;
    this.duration = (+input.format.duration) * 1000;

    const audioStreams = input.streams.filter((s) => s.codec_type === 'audio');
    const videoStreams = input.streams.filter((s) => s.codec_type === 'video');

    this.audio = audioStreams.map((s) => ({
      bitRate: +s.bit_rate,
      channelLayout: s.channel_layout,
      channels: +s.channels,
      sampleRate: +s.sample_rate,
    }));

    this.video = videoStreams.map((s) => {
      const framerate = s.avg_frame_rate.split('/')[0];

      return {
        bitRate: +s.bit_rate,
        frameRate: +framerate,
        resolution: {
          height: +s.height,
          width: +s.width,
        },
      };
    });
  }
}
