import * as AJV from 'ajv';
import { Handler } from 'aws-lambda';

import { IFFProbeEvent, schema } from '../../models/IFFProbeEvent';

const ajv = new AJV();

export const handler: Handler = (event: IFFProbeEvent, context, callback) => {
  const valid = ajv.validate(schema, event);

  if (!valid) {
    const error = ajv.errorsText(ajv.errors);
    return callback(new Error(`[400] ${error}`));
  }

  return callback(null);
};
