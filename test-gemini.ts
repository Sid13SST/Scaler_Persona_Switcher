import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey!);

const model = genAI.getGenerativeModel({ 
  model: 'gemini-2.5-flash',
  systemInstruction: 'You are a helpful assistant.'
}, { apiVersion: 'v1beta' });

async function run() {
  try {
    const chat = model.startChat({ history: [] });
    const result = await chat.sendMessage('Hello');
    console.log("SUCCESS:", result.response.text());
  } catch (e: any) {
    console.error('ERROR:', e.message);
  }
}
run();
