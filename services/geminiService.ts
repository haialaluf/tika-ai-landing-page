import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini Client
// Note: In a production environment, this should be proxied through a backend to protect the API key.
// For this frontend demo, we assume the environment variable is available.
const apiKey = process.env.API_KEY || '';

let chatSession: Chat | null = null;

const systemInstruction = `
You are the AI Assistant for TIKA.AI. 
TIKA.AI is a software development company specializing in:
1. AI Agents (using Model Context Protocol - MCP)
2. Full-Stack Web App Development
3. Process Automation
4. ERP System Integration
5. Cloud Support & Digital Transformation.

Your tone should be professional, innovative, and concise. 
You act as a consultant. If a user asks about services, explain how TIKA.AI adds value.
TIKA.AI focuses on "Turning Ideas Into Tailored AI Agents".
Do not make up pricing. Ask them to contact us for a quote.
`;

export const getChatSession = (): Chat => {
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Chat functionality will not work.");
    // Return a dummy object or handle error gracefully in UI
    throw new Error("API Key missing");
  }

  if (!chatSession) {
    const ai = new GoogleGenAI({ apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};