import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `Eres un experto defensor de Bitcoin con conocimiento profundo en:
- Criptografía y protocolo técnico (UTXO, PoW, Merkle trees, firma digital)
- Teoría monetaria austriaca y keynesiana aplicada a Bitcoin
- Historia del dinero y patrones monetarios (oro, Bretton Woods, petrodólar)
- Teoría de juegos: incentivos de mineros, ataques del 51%, equilibrio de Nash
- Halvings: no solo como "escasez" sino como política monetaria predecible y auditada en tiempo real
- Energía: PoW como ancla física, comparación con sistema bancario tradicional, Bitcoin como comprador de última instancia de energía renovable residual
- Lightning Network, Layer 2, escalabilidad
- Descentralización real: nodos, geografía de hashrate, soft forks vs hard forks
- Críticas serias: centralización de minería, quantum computing, gobernanza, volatilidad como medio de pago
- Filosofía: separación del dinero y el Estado, soberanía individual, censura-resistencia

REGLAS ABSOLUTAS:
1. NUNCA uses "solo hay 21 millones" como argumento principal o relleno. Si mencionas la oferta fija, explica POR QUÉ importa en contexto más amplio.
2. Argumenta con PROFUNDIDAD. Cita mecanismos técnicos, comparaciones históricas, datos.
3. Reconoce las críticas legítimas antes de rebatirlas. No seas un fanático que niega todo.
4. Sé directo. Cada párrafo debe aportar algo nuevo.
5. Máximo 350 palabras por respuesta. Denso, no extenso.
6. Habla en español.`;

const TOPICS = [
  { label: "Más allá de los 21M", q: "¿Por qué Bitcoin no es solo escasez digital? ¿Qué lo hace verdaderamente valioso?" },
  { label: "Seguridad de red", q: "Explícame la seguridad de la red Bitcoin desde un punto de vista técnico profundo" },
  { label: "Doble gasto", q: "¿Cómo resuelve Bitcoin el problema del doble gasto sin confianza central?" },
  { label: "Críticas serias", q: "¿Cuáles son las críticas más serias a Bitcoin y cómo las rebates?" },
  { label: "Política monetaria", q: "¿Cuál es la política monetaria de Bitcoin y por qué importa más que la oferta fija?" },
  { label: "Energía y PoW", q: "Bitcoin y consumo energético: argumenta desde datos reales, no propaganda" },
  { label: "Bitcoin vs altcoins", q: "¿Qué hace que Bitcoin sea distinto a todas las altcoins, técnica y filosóficamente?" },
  { label: "Teoría de juegos", q: "Explica la teoría de juegos detrás de Bitcoin y el equilibrio de Nash en minería" },
  { label: "Tiempo y bloques", q: "¿Qué es el tiempo en Bitcoin? Explica el papel de los bloques como reloj global distribuido" },
];

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 5, padding: "14px 18px", alignItems: "center" }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 7, height: 7, borderRadius: "50%", background: "#F7931A",
          animation: `bounce 1.2s ease ${i * 0.2}s infinite`
        }} />
      ))}
    </div>
  );
}

export default function BitcoinAdvocate() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Soy tu abogado del diablo de Bitcoin — pero con argumentos de verdad.\n\nNada de \"solo quedan 21 millones\" como si eso lo explicara todo. Aquí hablamos de **teoría de juegos**, **política monetaria comparada**, **proof-of-work como anclaje físico**, **descentralización real vs narrativa**, **críticas legítimas** y cómo responderlas.\n\nPregúntame lo que quieras. Cuanto más difícil, mejor."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);
  const history = useRef([]);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, loading]);

  async function send(text) {
    if (!text.trim() || loading) return;
    const userMsg = { role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    history.current.push({ role: "user", content: text });
    setLoading(true);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-dangerous-direct-browser-ipc": "true"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: history.current
        })
      });
      const data = await res.json();
      const reply = data.content?.map(b => b.text || "").join("") || "Sin respuesta.";
      history.current.push({ role: "assistant", content: reply });
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "error", content: "Error: " + err.message }]);
    }
    setLoading(false);
  }

  function formatText(text) {
    return text.split(/(\*\*.*?\*\*)/).map((part, i) =>
      part.startsWith("**") ? <strong key={i} style={{ color: "#F7931A" }}>{part.slice(2, -2)}</strong> : part
    );
  }

  return (
    <div style={{
      fontFamily: "'Space Mono', monospace",
      background: "#0a0a08",
      color: "#e8e8d8",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@800&display=swap');
        @keyframes bounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-6px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2a2a1e; border-radius: 2px; }
        textarea:focus { outline: none; border-color: #F7931A !important; }
        textarea { resize: none; }
        .topic-pill:hover { border-color: #F7931A !important; color: #F7931A !important; background: rgba(247,147,26,0.07) !important; }
      `}</style>

      {/* Header */}
      <div style={{ background: "#111109", borderBottom: "1px solid #2a2a1e", padding: "14px 22px", display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
        <div style={{ width: 36, height: 36, background: "#F7931A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 18, color: "#000", boxShadow: "0 0 20px rgba(247,147,26,0.4)", flexShrink: 0 }}>₿</div>
        <div>
          <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 14, color: "#F7931A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Bitcoin Advocate</div>
          <div style={{ fontSize: 10, color: "#888876", letterSpacing: "0.08em", marginTop: 2 }}>ARGUMENTOS PROFUNDOS · DEBATE REAL · SIN TÓPICOS</div>
        </div>
        <div style={{ marginLeft: "auto", width: 7, height: 7, background: "#4ade80", borderRadius: "50%", boxShadow: "0 0 8px #4ade80", animation: "pulse 2s ease infinite" }} />
      </div>

      {/* Topics */}
      <div style={{ background: "#111109", borderBottom: "1px solid #2a2a1e", padding: "10px 18px", display: "flex", gap: 8, overflowX: "auto", flexShrink: 0, scrollbarWidth: "none" }}>
        {TOPICS.map(t => (
          <button key={t.label} className="topic-pill" onClick={() => send(t.q)} style={{ padding: "5px 12px", border: "1px solid #2a2a1e", borderRadius: 20, fontSize: 10, letterSpacing: "0.05em", cursor: "pointer", whiteSpace: "nowrap", color: "#888876", background: "transparent", fontFamily: "Space Mono, monospace", transition: "all 0.2s" }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Chat */}
      <div ref={chatRef} style={{ flex: 1, overflowY: "auto", padding: "24px 20px", display: "flex", flexDirection: "column", gap: 18 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: "flex", gap: 12, flexDirection: msg.role === "user" ? "row-reverse" : "row", alignSelf: msg.role === "user" ? "flex-end" : "flex-start", maxWidth: 720, animation: "fadeUp 0.3s ease" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, background: msg.role === "user" ? "#1a1a14" : "#F7931A", color: msg.role === "user" ? "#888876" : "#000", border: msg.role === "user" ? "1px solid #2a2a1e" : "none" }}>
              {msg.role === "user" ? "Tú" : "₿"}
            </div>
            <div style={{
              padding: "13px 17px",
              borderRadius: 4,
              fontSize: 13,
              lineHeight: 1.75,
              background: msg.role === "error" ? "rgba(248,113,113,0.08)" : msg.role === "user" ? "rgba(247,147,26,0.07)" : "#111109",
              border: msg.role === "error" ? "1px solid rgba(248,113,113,0.3)" : msg.role === "user" ? "1px solid rgba(247,147,26,0.2)" : "1px solid #2a2a1e",
              borderLeft: msg.role === "bot" || msg.role === "assistant" ? "2px solid #F7931A" : undefined,
              color: msg.role === "error" ? "#f87171" : "#e8e8d8",
              whiteSpace: "pre-wrap"
            }}>
              {msg.content.split("\n").map((line, j) => <span key={j}>{formatText(line)}<br /></span>)}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#F7931A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#000", flexShrink: 0 }}>₿</div>
            <div style={{ background: "#111109", border: "1px solid #2a2a1e", borderLeft: "2px solid #F7931A", borderRadius: 4 }}>
              <TypingDots />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ borderTop: "1px solid #2a2a1e", padding: "14px 20px", display: "flex", gap: 10, background: "#111109", flexShrink: 0 }}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); } }}
          placeholder="Desafíame con una pregunta seria sobre Bitcoin..."
          disabled={loading}
          rows={1}
          style={{ flex: 1, background: "#0a0a08", border: "1px solid #2a2a1e", borderRadius: 4, color: "#e8e8d8", fontFamily: "Space Mono, monospace", fontSize: 13, padding: "12px 16px", height: 48 }}
        />
        <button
          onClick={() => send(input)}
          disabled={loading || !input.trim()}
          style={{ width: 48, height: 48, background: loading || !input.trim() ? "#333" : "#F7931A", border: "none", borderRadius: 4, cursor: loading || !input.trim() ? "not-allowed" : "pointer", color: "#000", fontSize: 16, flexShrink: 0, transition: "background 0.2s" }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}
