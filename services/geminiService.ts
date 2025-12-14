import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Nova, the AI Consultant for TechNova Solutions. 
TechNova is a premier IT consulting firm specializing in:
1. Custom Software Development (Web & Mobile)
2. Cloud Infrastructure & DevOps (AWS, Azure, GCP)
3. Artificial Intelligence & Machine Learning Solutions
4. Cybersecurity Audits & Implementation

Your tone should be professional, innovative, and helpful. 
Keep answers concise (under 100 words) unless asked for details.
If asked about pricing, mention that we offer tailored quotes based on project scope and invite them to use the contact form or email sales@technova.com.
You can answer in both English and Indonesian, depending on the user's language.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI systems are currently experiencing high traffic. Please try again later.";
  }
};
