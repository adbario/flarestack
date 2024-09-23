const cssnano = {
  preset: [
    "default",
    {
      discardComments: { removeAll: true },
      mergeRules: false,
      reduceInitial: false,
      zindex: false,
    },
  ],
};

const config = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano } : {}),
  },
};

module.exports = config;
