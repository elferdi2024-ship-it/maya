import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || "mock-key" });

export interface ValidationResult {
  isSharp: boolean;
  sharpnessScore: number;
  detectedRoom: string;
  feedback: string;
}

export const validateImageWithGemini = async (base64Image: string): Promise<ValidationResult> => {
  try {
    // Strip the data:image/jpeg;base64, prefix if present
    const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: base64Data,
            },
          },
          {
            text: `Analyze this image for a 360 virtual tour. 
            1. Determine if the image is sharp and clear (score 0-100).
            2. Identify the type of room (e.g., Living Room, Kitchen, Bedroom, Bathroom, Exterior, Unknown).
            3. Provide brief feedback if the image is blurry or poorly lit.`,
          },
        ],
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isSharp: {
              type: Type.BOOLEAN,
              description: "True if the image is sharp enough for a professional virtual tour.",
            },
            sharpnessScore: {
              type: Type.NUMBER,
              description: "Score from 0 to 100 indicating image sharpness.",
            },
            detectedRoom: {
              type: Type.STRING,
              description: "The type of room detected.",
            },
            feedback: {
              type: Type.STRING,
              description: "Brief feedback on lighting and sharpness. Empty if perfect.",
            },
          },
          required: ["isSharp", "sharpnessScore", "detectedRoom", "feedback"],
        },
      },
    });

    const resultText = response.text?.trim() || "{}";
    const result = JSON.parse(resultText) as ValidationResult;
    return result;
  } catch (error) {
    console.error("Gemini validation failed:", error);
    // Fallback if offline or API fails
    return {
      isSharp: true,
      sharpnessScore: 80,
      detectedRoom: "Unknown",
      feedback: "Validation unavailable (offline mode)",
    };
  }
};
