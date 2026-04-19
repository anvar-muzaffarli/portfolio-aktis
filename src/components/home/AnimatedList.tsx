"use client";

import { useState, useEffect, useRef } from "react";
import { Bot, Send, X, Loader2 } from "lucide-react";

export function MessengerAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Salam, Mən AI Khalid ! Sizə necə kömək edə bilərəm?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Səs obyektini yaddaşda saxlamaq üçün Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUnlocked = useRef(false);

  // Səsi səsləndirmə funksiyası
  const playPing = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        console.log("Səs brauzer tərəfindən hələ də bloklanır.");
      });
    }
  };

  useEffect(() => {
    // 1. Səs faylını öncədən yüklə
    audioRef.current = new Audio("/sounds/messenger.mp3");
    audioRef.current.volume = 0.6;

    // 2. Brauzer səs blokunu qırmaq üçün "Unlock" mexanizmi
    const unlockAudio = () => {
      if (audioRef.current && !audioUnlocked.current) {
        audioRef.current.play().then(() => {
          audioRef.current?.pause();
          audioRef.current!.currentTime = 0;
          audioUnlocked.current = true;
        });
      }
      // Bir dəfə klik kifayətdir, sonra eventi silirik
      window.removeEventListener("click", unlockAudio);
    };
    window.addEventListener("click", unlockAudio);

    // 3. Səhifə yüklənəndən 2 saniyə sonra pəncərəni aç və salamla
    const timer = setTimeout(() => {
      setOpen(true);
      playPing();
    }, 2000);

    return () => {
      window.removeEventListener("click", unlockAudio);
      clearTimeout(timer);
    };
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // İstifadəçi mesajı (Səs çıxmır)
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();

      // AI cavab verəndə səs çıxır
      playPing();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error("Xəta baş verdi");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Messenger Düyməsi */}
      <button 
        onClick={() => {
          setOpen(!open);
          if (!open) playPing();
        }}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-black text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        {open ? <X size={24} /> : <Bot size={28} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] h-[520px] max-h-[80vh] bg-white border border-stone-100 rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="p-5 border-b bg-stone-50/50 flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg shadow-stone-200">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900">AI Khalid </h3>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-stone-500 font-medium  tracking-wider">onlinedır</span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-white/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`p-4 rounded-2xl max-w-[85%] text-sm leading-relaxed shadow-sm ${
                  m.role === "user" 
                  ? "bg-black text-white rounded-tr-none" 
                  : "bg-stone-100 text-stone-800 rounded-tl-none border border-stone-200/50"
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-100 p-3 rounded-2xl flex items-center gap-2">
                  <Loader2 className="animate-spin text-stone-400" size={16} />
                  <span className="text-[10px] text-stone-400 font-medium">AI Khalid düşünür...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={sendMessage} className="p-4 bg-white border-t border-stone-50">
            <div className="relative flex items-center">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Sualınızı bura yazın..."
                className="w-full p-4 pr-12 bg-stone-50 border border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-stone-200 transition-all text-sm shadow-inner"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="absolute right-3 p-2 text-stone-300 hover:text-black disabled:opacity-20 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}