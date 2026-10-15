import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoveTerminal() {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);

  const results = [
    "Compiling our love story...",
    "✓ Chemistry detected: 100%",
    "✓ Incredible memories: Unlimited",
    "✓ Errors found: 0",
    "✓ Future together: Confirmed",
    "",
    "❤️ Happy one year to my cutie patootie princess ❤️",
    "You're my favorite constant and safe space in a world full of variables.",
    "I love you more than words (or code) can express."
  ];

  return (
    <div className="min-h-screen bg-[#1b1632] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <h1 className="text-white text-center text-2xl font-bold mb-2">
          A Little Code Just For You 💗
        </h1>

        <p className="text-purple-200 text-center mb-6 text-sm">
          Since you're always running code, here's a fun one you can deploy.
        </p>

        <div className="bg-[#101827] rounded-2xl overflow-hidden shadow-2xl border border-slate-600">
          <div className="bg-[#263244] p-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="text-slate-200 text-sm ml-3">
              love.exe
            </span>
          </div>

          <div className="p-5 min-h-[260px] font-mono text-sm">
            <p className="text-slate-400">
              {"// Anniversary compatibility test"}
            </p>

            <p className="text-pink-300 mt-3">
              const you = "my favorite person";
            </p>

            <p className="text-pink-300">
              const us = "forever";
            </p>

            {!started ? (
              <p className="text-slate-400 mt-6">
                &gt; Waiting for your command...
              </p>
            ) : (
              <div className="text-green-300 mt-6 space-y-2">
                {results.map((line, index) => (
                  <p key={index} className="whitespace-pre-wrap">
                    {line || "\u00A0"}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="px-5 pb-5">
            <button
              onClick={() => setStarted(!started)}
              className="w-full bg-pink-400 hover:bg-pink-500 text-slate-900 font-bold py-3 rounded-xl"
            >
              {started ? "↻ Run Again" : "▶ Run Love.exe"}
            </button>
          </div>
        </div>

        <button
          onClick={() => navigate("/closing")}
          className="w-full mt-6 text-white bg-white/10 border border-white/30 py-3 rounded-xl"
        >
          ← Back to our love story
        </button>
      </div>
    </div>
  );
}
