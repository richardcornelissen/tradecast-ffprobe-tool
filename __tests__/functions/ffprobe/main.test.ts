import { handler } from '../../../src/functions/ffprobe/main';
import { Context } from 'aws-lambda';

describe('functions', () => {
  describe('ffprobe', () => {
    describe('main', () => {
      it('Should fail on empty event', () => {
        const event = null;
        let result;
        let error: Error | string;

        handler(event, {} as Context, (err, res) => {
          error = err;
          result = res;
        });

        expect(result).toBeFalsy();
        expect(error).toBeTruthy();
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toEqual('[400] Missing url in input');
      });

      it('Should handle invalid event', () => {
        const event = {
          url: 1,
        };

        let result;
        let error: Error | string;

        handler(event, {} as Context, (err, res) => {
          error = err;
          result = res;
        });

        expect(result).toBeFalsy();
        expect(error).toBeTruthy();
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toEqual('[400] Invalid url in input');
      });

      it('Should handle valid event', () => {
        const event = {
          url: 'https://s3-eu-west-1.amazonaws.com/tradecast-development-test/sample-video/tradecast.mp4',
        };

        let result;
        let error: Error | string;

        handler(event, {} as Context, (err, res) => {
          error = err;
          result = res;
        });

        expect(error).toBeFalsy();
        expect(result).toBeTruthy();
      });
    });
  });
});
