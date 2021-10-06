import { Container, RemoverIcon } from "./styled";
import Contador from "../contador"
import { useState } from "react";

export default function CarrinhoItem(props){
    const [produtos, setProdutos] = useState(props.info)


    function alterarQtd(qtd){
        setProdutos({...produtos, qtd })

        props.onUpdate(produtos.id, qtd)
    }

    function remover(){
        props.onRemove(produtos.id)
    }

    return(
        <Container>
            <div>
                <img className="capa" src={produtos.imagem} alt=""/>
                <Contador onChange={alterarQtd} value={produtos.qtd}/>
            </div>
            <div className="titulo">
                {produtos.titulo}
            </div>
            <div className="preco">
                <span>Preço unitário</span>
                {produtos.preco}
            </div>
            <div className="qtd">
                <span>Qtd</span>
                {produtos.qtd}
            </div>

            <div className="remover"> <RemoverIcon onClick={remover}/> </div>
        </Container>
    )
}