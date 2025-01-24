import { useState, useEffect, useRef } from "react";
import Pomodoro from "./Pomodoro.jsx";
import Config from "./Config.jsx";

const Cronometro = () => {
  const tempoTotalInical = 1500; // 25 minutos em segundos
  const cincoMinutos = 300; // 5 minuto em segundos
  const umMinuto = 60; // 1 minto em segundos

  // states

  const tempoPausa = 300; // 25 minutos em segundos
  const [tempoOff, setTempoOff] = useState(tempoPausa);
  const [tempoTotal, setTempoTotal] = useState(tempoTotalInical);
  const [tempoRestante, setTempoRestante] = useState(tempoTotalInical); // Estado que guarda o tempo restante
  const [estaRodando, setEstaRodando] = useState(false); // Estado que indica se o cronômetro está rodando
  const intervalRef = useRef(null); // Referência para o intervalo do cronômetro

  // states, FIM

  //functions

  const incrementarValorPause = () => {
    setTempoOff((prev) => prev + umMinuto);
  };

  const decrementarValorPause = () => {
    setTempoOff((prev) => (prev - umMinuto >= 1 ? prev - umMinuto : 0));
  };

  const incrementarValor = () => {
    setTempoTotal((prev) => prev + cincoMinutos);
  };

  const decrementarValor = () => {
    setTempoTotal((prev) =>
      prev - cincoMinutos >= 0 ? prev - cincoMinutos : 0
    );
  };

  const alterarValorSessao = () => {
    setTempoRestante(tempoTotal);
    setEstaRodando(false);
  };

  const alterarValorPause = () => {
    setTempoRestante(tempoOff);
    setEstaRodando(false);
  };

  // Função para iniciar o cronômetro
  const startTime = () => {
    if (!estaRodando && tempoRestante > 0) {
      setEstaRodando(true); // Marca como "rodando"
      intervalRef.current = setInterval(() => {
        setTempoRestante((prevTempo) => {
          if (prevTempo <= 1) {
            clearInterval(intervalRef.current); // Para o cronômetro quando chega a 0
            setEstaRodando(false); // Marca como "não rodando"
            return 0;
          }
          return prevTempo - 1; // Decrementa o tempo a cada segundo
        });
      }, 1000);
    }
  };

  // Função para pausar o cronômetro
  const pauseTime = () => {
    clearInterval(intervalRef.current); // Limpa o intervalo
    setEstaRodando(false); // Marca como "não rodando"
  };

  // Função para reiniciar o cronômetro
  const resetTime = () => {
    clearInterval(intervalRef.current); // Limpa o intervalo
    setTempoRestante(tempoTotal); // Restaura o tempo para 25 minutos
    setEstaRodando(false); // Marca como "não rodando"
  };

  // Função para formatar o tempo de segundos para minutos:segundos
  const formatarTempo = (time) => {
    const minutes = Math.floor(time / 60); // Calcula os minutos
    let seconds = time % 60; // Calcula os segundos
    if (seconds < 10) {
      seconds = `0${seconds}`; // Adiciona o zero à esquerda quando os segundos são menores que 10
    }
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Remove scroll do body
    return () => {
      document.body.style.overflow = ""; // Restaura o scroll ao desmontar o componente
    };
  }, []);

  //functions, FIM

  return (
    <div className="h-screen w-screen overflow-hidden bg-zinc-900 flex justify-center items-center">
      <div className="w-[700px] space-y-6 h-auto p-6 sm:max-w-[90%]:">
        <h1 className="text-slate-100 text-2xl font-semibold text-center font-montserrat md:text-3xl ">
          Pomodoro Time
        </h1>

        {/* Passando as funções e estado como props para o Pomodoro */}
        <Pomodoro
          tempoRestante={tempoRestante}
          formatarTempo={formatarTempo}
          startTime={startTime}
          pauseTime={pauseTime}
          resetTime={resetTime}
          estaRodando={estaRodando}
        />

        <Config
          tempoRestante={tempoRestante}
          formatarTempo={formatarTempo}
          tempoTotalInical={tempoTotalInical}
          tempoOff={tempoOff}
          incrementarValor={incrementarValor}
          tempoTotal={tempoTotal}
          decrementarValor={decrementarValor}
          incrementarValorPause={incrementarValorPause}
          decrementarValorPause={decrementarValorPause}
          alterarValorSessao={alterarValorSessao}
          estaRodando={estaRodando}
          alterarValorPause={alterarValorPause}
        />
      </div>
    </div>
  );
};

export default Cronometro;
