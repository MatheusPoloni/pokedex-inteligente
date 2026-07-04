import { useState } from "react";
import type { Pokemon } from "../types/pokemon";
import { askPokemonAI } from "../services/gemini";

type AskAIProps = {
  pokemon: Pokemon | null;
};

function AskAI({ pokemon }: AskAIProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    if (!pokemon) return;

    if (!question.trim()) return;

    setLoading(true);

    try {
      const response = await askPokemonAI(
        pokemon.name,
        question
      );

      setAnswer(response ?? "");
      setQuestion("");
    } catch (error) {
      setAnswer("Erro ao consultar a IA.");
    } finally {
      setLoading(false);
    }
  }

  return (
  <form
    className="ask-ai"
    onSubmit={(event) => {
      event.preventDefault();
      handleAsk();
    }}
  >
    <h3>Pergunte para a IA</h3>

    <input
      type="text"
      placeholder="Faça uma pergunta..."
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
    />

    <button
      type="submit"
      className="button"
      disabled={loading}
    >
      {loading ? "Pensando..." : "Perguntar"}
    </button>

    {loading && <p>Pensando...</p>}

    {answer && (
      <div className="ai-answer">
        <h4>Resposta</h4>
        <p>{answer}</p>
      </div>
    )}
  </form>
);
}

export default AskAI;