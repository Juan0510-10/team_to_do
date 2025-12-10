import { useState } from "react";

export default function TodoForm({ onAdd, disabled }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd?.(text.trim());
    setText("");
  };

  return (
    <div className="bg-black/40 p-6 rounded-3xl shadow-xl border border-gold/20 mb-6 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gold rounded-lg shadow-md">
          <svg 
            className="w-5 h-5 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 4v16m8-8H4" 
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-white">
          Nueva Tarea
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg 
              className="w-5 h-5 text-gold" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
          </div>
          <input
            className="w-full pl-11 pr-4 py-3.5 border border-gold/20 rounded-2xl shadow-sm focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all duration-200 outline-none bg-transparent text-white placeholder-gold/60"
            placeholder="¿Qué necesitas hacer hoy?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={disabled}
          />
          {text && !disabled && (
            <button
              onClick={() => setText("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-gold/80 transition-colors"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          )}
        </div>

        <button
          className="bg-gold text-black font-bold py-3.5 px-6 rounded-2xl transition-all duration-300 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
          onClick={submit}
          disabled={disabled || !text.trim()}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 4v16m8-8H4" 
            />
          </svg>
          <span className="hidden sm:inline">Agregar Tarea</span>
          <span className="sm:hidden">Agregar</span>
        </button>
      </div>

      {/* Contador de caracteres */}
      {text && (
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="text-gray-300">
            {text.length} caracteres
          </span>
          {text.length > 100 && (
            <span className="text-amber-600 font-semibold flex items-center gap-1">
              <svg 
                className="w-4 h-4" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
                  clipRule="evenodd" 
                />
              </svg>
              Tarea larga
            </span>
          )}
        </div>
      )}
    </div>
  );
}