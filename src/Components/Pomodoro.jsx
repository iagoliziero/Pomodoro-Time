import { Pause, Play, RefreshCw } from "lucide-react";
import PlayButton from "./PlayButton";

function Pomodoro({
  tempoRestante,
  formatarTempo,
  startTime,
  pauseTime,
  resetTime,
  estaRodando,

}) {
  return (
    <ul className="bg-red-main h-2/6 rounded-t-2xl flex flex-col ">
      <h2 
      className="text-slate-100 p-10 font-medium font-montserrat text-2xl text-center">
         Sessão </h2>

      <h1 className="text-slate-100 font-medium font-montserrat text-7xl md:text-8xl text-center items-center">
        {/* Exibindo o tempo formatado */}
        {formatarTempo(tempoRestante)}
      </h1>

      <li className="flex gap-8 justify-center p-10">
        {/* Botão de Pausar */}
        <PlayButton
          onClick={pauseTime} // Pausa o cronômetro
          disabled={!estaRodando} // Desabilita se não estiver rodando
        >
          <Pause />
        </PlayButton>

        {/* Botão de Iniciar */}
        <PlayButton
          onClick={startTime} // Inicia o cronômetro
          disabled={estaRodando} // Desabilita se já estiver rodando
        >
          <Play />
        </PlayButton>

        {/* Botão de Reiniciar */}
        <PlayButton
          onClick={resetTime} // Reinicia o cronômetro
        >
          <RefreshCw />
        </PlayButton>
      </li>
    </ul>
  );
}

export default Pomodoro;
