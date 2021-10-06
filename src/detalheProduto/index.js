import Cookies from "js-cookie";

import { Container } from "./styled";
import { Link, useHistory } from "react-router-dom";
import { useState} from "react";



export default function DetalhesProduto(props){

    const [produtos, setProdutos ] = useState(props.location.state);
    const navigation = useHistory();
    
    function Comprar() {
        let carrinho = Cookies.get('carrinho')
        carrinho = carrinho !== undefined
                            ? JSON.parse(carrinho)
                            : [];
    
        if(!carrinho.some(item => item.id === produtos.id))
            carrinho.push({...produtos, qtd: 1 });


        Cookies.set('carrinho', JSON.stringify(carrinho));
        navigation.push('/carrinho');
    }


    return(
        <Container>
            <div>
                <Link to="/"> <img className="voltar" src="/assets/images/voltar.svg" alt=""/> </Link>
                <div className="conteudo">
                    <div className="titulo"> Detalhes do Produto </div>
                    <div className="alinhando"> 
                        <div className="produto">
                            <div> <img src={produtos.imagem} alt=""/> </div>
                            <div className="titulo"> {produtos.titulo} </div>
                            <div> {produtos.preco} </div>
                        </div>
                        <div className="conteudoDesc">
                            <div className="descricao">    
                                <div className="titulo"> Descrição </div>
                                <div> {produtos.descricao} </div>
                            </div> 
                            <div className="especificacoes">    
                                <div className="titulo"> Especificações </div>
                                <div> {produtos.especificacoes} </div>
                                <button onClick={Comprar}> Comprar </button>
                            </div>         
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}