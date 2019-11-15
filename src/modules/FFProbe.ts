import { spawnSync } from 'child_process';
import { path as ffprobePath } from '@ffprobe-installer/ffprobe';
import { IFFProbeOutput } from '../models/IFFProbeOutput';

const args = ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams'];

export default function invokeFFProbe(url: string) {
  const output = spawnSync(ffprobePath, [ ...args, url ]);
    const ffprobe: IFFProbeOutput = JSON.parse(output.stdout);
    return ffprobe;
};
