import { Container } from './styled'
import { Link } from 'react-router-dom'

export default function Escolha(){
    return(
        <Container>
            <div className="titulo"> Olá, Seja Bem vindo </div>
            <div className="titulo"> Para onde deseja ir ? </div>
            <Link className="router" to="/home">
                <button>
                    Carrinho com props
                </button> 
            </Link>

            <Link className="router" to="/contador">
                <button>
                    Contador com props
                </button>
            </Link>
        </Container>
    )
}