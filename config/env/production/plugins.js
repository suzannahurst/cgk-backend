module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME", "cloud name"),
      api_key: env("CLOUDINARY_KEY", "api key"),
      api_secret: env("CLOUDINARY_SECRET", "secret key"),
    },
  },
});
