import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      
      const { history, message } = req.body;
      
      const chat = ai.chats.create({
        model: "gemini-3.6-flash",
        config: {
          systemInstruction: "You are Aquua, a helpful and friendly customer support AI chatbot for Aquarium House Pet Shop. The shop sells dogs, cats, Persian cats, exotic birds, rabbits, guinea pigs, aquarium fish, and all their related accessories and food. The shop is located at Radharani Para, Balangir, Odisha – 767001. Keep your answers concise, helpful, and friendly. Only answer questions related to the pet shop, its products, and services.",
        },
      });

      if (history && history.length > 0) {
        // we can't easily populate history in chats.create for this SDK, so we will pass context in the message,
        // or just rely on a simple single-turn for now if complex. Wait, actually we can pass the previous messages? 
        // SDK says `chat.sendMessage({ message: ... })`. Let's just pass the conversation history in the prompt if we want,
        // but for simplicity, let's just create a new chat and send a combined message, or just answer the latest.
      }
      
      // Better approach for history:
      // We'll format the history into the prompt string.
      let promptStr = "";
      if (history && history.length > 0) {
        promptStr += "Conversation History:\n";
        history.forEach((msg: any) => {
          promptStr += `${msg.role === 'user' ? 'User' : 'Aquua'}: ${msg.content}\n`;
        });
        promptStr += "\nUser: " + message;
      } else {
        promptStr = message;
      }

      const response = await chat.sendMessage({ message: promptStr });
      res.json({ reply: response.text });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to communicate with Aquua." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
