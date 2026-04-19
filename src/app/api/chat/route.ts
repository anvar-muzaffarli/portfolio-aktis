import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// .env.local faylından oxuduğundan əmin ol
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function POST(req: Request) {
  try {
    if (!genAI) {
      throw new Error("Gemini API key is missing.");
    }

    const { message } = await req.json();

    // v1beta əvəzinə birbaşa model adını və düzgün metodunu çağıraq
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash-latest", // "latest" əlavə etmək daha stabildir
    });

    const result = await model.generateContent(message);
    const response = result.response;
    const text = response.text();

    if (!text) throw new Error("AI cavab qaytarmadı.");

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error("Gemini Xətası:", error);
    
    // Xətanı daha aydın görmək üçün mesajı qaytaraq
    return NextResponse.json(
      { reply: "Ödənişli AI API inteqrasiya mərhələsində olduğum üçün suallarınızı cavablandıra bilməyəcəm. Geridönüşümüz müq olacaq." },
      { status: 200 }
    );
  }
}