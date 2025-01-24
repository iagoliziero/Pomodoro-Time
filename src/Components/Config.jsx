import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import ArrowButton from "./ArrowButton";
import H2 from "./H2";
import ButtonAdd from "./ButtonAdd";
{
  /* apagar qualquer coisa*/
}
function Config({ formatarTempo, tempoOff, incrementarValor, tempoTotal, decrementarValor, incrementarValorPause, decrementarValorPause, alterarValorSessao, estaRodando, alterarValorPause}) {
  return (
    <div>
      <div className="bg-slate-100 h-[200px] rounded-2xl flex flex-row relative bottom-6 rounded-t-none justify-center ">
        <H2>
          Tempo de sessão
        </H2>
        <H2>
          Duração da pausa
        </H2>
        
      </div>

      <div className="flex relative bottom-36  justify-center gap-16 sm:gap-24">
        <div className="flex gap-4">
          <ArrowButton 
        >
            <CircleArrowUp className=" w-7 h-7 md:w-8 md:h-8" 
            onClick={incrementarValor}/>
          </ArrowButton>

          <h2> {formatarTempo(tempoTotal)}
            
         </h2>
          <ArrowButton
          onClick={decrementarValor}>
            <CircleArrowDown className=" w-7 h-7 md:w-8 md:h-8" />
          </ArrowButton>
        </div>

        <div className="flex gap-4">
          <ArrowButton>
            <CircleArrowUp className=" w-7 h-7 md:w-8 md:h-8"
            onClick={incrementarValorPause} />
          </ArrowButton>

          <h2> {formatarTempo(tempoOff)} </h2>

          <ArrowButton>
            <CircleArrowDown className=" w-7 h-7 md:w-8 md:h-8"  
            onClick={decrementarValorPause}/>
          </ArrowButton>
        </div>
      </div>

      <div className="flex relative bottom-32 justify-center gap-12 sm:gap-24">
        <ButtonAdd 
            onClick={alterarValorSessao}
            disabled={estaRodando}>
            Adicionar
             </ButtonAdd>

        <ButtonAdd 
        onClick={alterarValorPause} 
        disabled={estaRodando}>
        Adicionar
        </ButtonAdd>
      </div>
      
    </div>
  );
}

export default Config;
