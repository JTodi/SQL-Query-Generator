const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");
dotenv.config();

// const openaiApiKey = process.env.OPENAI_API_KEY;
const openaiApiKey = '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';

if (!openaiApiKey) {
  console.error('OPENAI_API_KEY is not set.');
  process.exit(1);
}

const configuration = new Configuration({
  apiKey: openaiApiKey,
});
const openai = new OpenAIApi(configuration);

module.exports = openai;
