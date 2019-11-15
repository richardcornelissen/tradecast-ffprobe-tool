# tradecast-ffprobe-tool
TradeCast NodeJs test assignment by Richard Cornelissen

## Getting started
Clone repository and run the following commands:
```
yarn
yarn test
yarn dev
```

## Local invocation
Run the following command to invoke ffprobe locally
```
yarn serverless invoke local --function ffprobe --data '{"url":"https://s3-eu-west-1.amazonaws.com/tradecast-development-test/sample-video/tradecast.mp4"}'
```

