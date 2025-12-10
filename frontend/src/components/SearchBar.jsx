import useDebounce from "../hooks/useDebounce";

export default function SearchBar({ query, setQuery, filter, setFilter }) {
  const debounced = useDebounce(query, 400);

  return (
    <div className="w-full bg-black/35 p-6 rounded-3xl shadow-lg border border-gold/10">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Buscador */}
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          <input
            className="w-full pl-11 pr-4 py-3 border border-gold/20 rounded-2xl shadow-sm focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all duration-200 outline-none bg-transparent text-white placeholder-gold/60"
            placeholder="Buscar por texto o autor..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
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

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-2 bg-black/60 px-3 py-2 rounded-lg">
            <svg 
              className="w-4 h-4 text-gold" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" 
              />
            </svg>
            <span className="text-sm font-bold text-gold">Filtrar:</span>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {[
              { value: "all", label: "Todas", icon: "📋" },
              { value: "pending", label: "Pendientes", icon: "⏳" },
              { value: "completed", label: "Completadas", icon: "✅" }
            ].map((f) => (
              <button
                key={f.value}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                  filter === f.value
                      ? "bg-gold text-black shadow-lg"
                        : "bg-black/20 hover:bg-black/10 text-white border border-gold/10"
                }`}
                onClick={() => setFilter(f.value)}
              >
                <span className="mr-1">{f.icon}</span>
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador de búsqueda activa */}
      {query && (
        <div className="mt-3 flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
          <span className="text-gray-300">
            Buscando: <span className="font-semibold text-gold">"{query}"</span>
          </span>
        </div>
      )}
    </div>
  );
}