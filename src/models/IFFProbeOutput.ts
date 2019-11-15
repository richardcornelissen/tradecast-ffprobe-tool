export interface IFFProbeStream {
  codec_type: 'audio' | 'video';
  bit_rate: string | number;

  // Audio
  channel_layout?: string;
  channels?: string | number;
  sample_rate?: string | number;

  // Video
  height?: string | number;
  width?: string | number;
  avg_frame_rate?: string;
}

export interface IFFProbeFormat {
  bit_rate: string | number;
  duration: string | number;
}

export interface IFFProbeOutput {
  streams: IFFProbeStream[];
  format: IFFProbeFormat;
}
