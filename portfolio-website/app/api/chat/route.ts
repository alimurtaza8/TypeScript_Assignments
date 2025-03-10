import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse} from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request){
    const {message} = await req.json();

    try{
        const chatModel = genAI.getGenerativeModel({model: "gemini-1.5-flash"});
        const prompt =  `You are Ali Murtaza’s personal profile assistant. He is a blockchain developer specializing in smart contracts, Web3, NFTs, DeFi, and decentralized apps. Answer questions about his skills, projects, and experience succinctly and professionally.
        Respond to: ${message} in a helpful, professional manner. `

        const result = await chatModel.generateContent(prompt);
        const response = await result.response;

        return NextResponse.json({ text: response.text()});

    } catch {
        return NextResponse.json(
            {error: "Failed To generate Response"},
            {status: 500}
        );

    }

}