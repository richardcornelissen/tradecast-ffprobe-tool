import { Handler } from 'aws-lambda';

export const handler: Handler = (event, context, callback) => {
  return callback(null);
};
