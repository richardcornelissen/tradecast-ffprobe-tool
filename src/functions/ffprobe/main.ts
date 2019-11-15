import * as AJV from 'ajv';
import { Handler } from 'aws-lambda';

import { IFFProbeEvent, schema } from '../../models/IFFProbeEvent';

import { FFProbeResult } from '../../models/FFProbeResult';
import { logger } from '../../modules/Logger';
import invokeFFProbe from '../../modules/FFProbe';

const ajv = new AJV();

export const handler: Handler = (event: IFFProbeEvent, context, callback) => {
  const valid = ajv.validate(schema, event);
  if (!valid) {
    const error = ajv.errorsText(ajv.errors);
    return callback(new Error(`[400] ${error}`));
  }

  try {
    const ffprobe = invokeFFProbe(event.url);
    const result = new FFProbeResult(ffprobe);
    return callback(null, result);
  } catch (err) {
    logger.error({ err }, 'Unable to run ffprobe with input');
    return callback(new Error(`[500] ${err.message}`));
  }
};
