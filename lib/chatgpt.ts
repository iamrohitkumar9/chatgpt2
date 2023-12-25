import { Configuration,OpenAIApi } from "openai";

//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

const configuration=new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
});

const openai=new OpenAIApi(configuration);

export default openai;