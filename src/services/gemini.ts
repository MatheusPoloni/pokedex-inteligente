import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function askPokemonAI(
  pokemonName: string,
  question: string
) {
  const prompt = `
Você é uma Pokédex inteligente especializada em Pokémon.

O Pokémon atual é: ${pokemonName}.

Responda apenas perguntas relacionadas a esse Pokémon.

Se a pergunta não estiver relacionada ao Pokémon, responda educadamente que você só pode responder perguntas sobre o Pokémon pesquisado.

Explique de forma simples, clara e em português do Brasil.

Pergunta:
${question}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}