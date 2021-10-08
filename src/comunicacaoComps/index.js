import { useState } from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom';

export default function Contador(){
    const [qtd, setQtd] = useState(0);

    function incrementar(){
        if(qtd >= 10)
            return

        setQtd(qtd+1)    
    }

    function decrementar(){
        if(qtd == 0)
            return

        setQtd(qtd-1)    
    }

    function resetar(){
        setQtd(0);
    }

    return(
        <Container>
            <div className="conteudo">
                <div className="align-voltar">
                    <Link to="/"> <img className="voltar" src="/assets/images/voltar.svg" alt="" /> </Link>
                </div>
                <div className="contador">
                    <div className="fonte"> Contador </div>
                    <div className="fonte"> {qtd} </div>
                    <div>
                        <button onClick={incrementar}> + </button>
                        <button onClick={decrementar}> - </button>
                    </div>
                    <Resetar funcao={resetar}/>
                </div>    
            </div>    
        </Container>
    )
}


function Resetar(props){

    function resetar(){
        props.funcao()
    }
    
    return(
        <button onClick={resetar}> Resetar </button>
    )
}