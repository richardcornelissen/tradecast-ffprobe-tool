export interface IFFProbeEvent {
  url: string;
}

export const schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    url: {
      title: "url",
      type: "string",
      format: 'uri',
      pattern: '(http|https)://(.)+',
    }
  },
  required: ["url"],
  type: "object",
};
