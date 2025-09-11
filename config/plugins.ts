
export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dumpkamke'),
        api_key: env('367565624319652'),
        api_secret: env('wr5KARtp2lcuPcVOOHEvNC9sPJo'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});