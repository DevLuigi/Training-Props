
import { Link } from "react-router-dom"
import { Container } from "./styled"
import { useEffect, useState } from "react"

import Cookies from "js-cookie"
import CarrinhoItem from './carrinhoItem'


export default function Carrinho(){

    const[produtos, setProdutos] = useState([])

    useEffect(carregarCarrinho, []);

    function carregarCarrinho(){

        let carrinho = Cookies.get('carrinho')
        carrinho = carrinho !== undefined
                            ? JSON.parse(carrinho)
                            : []
        
        setProdutos(carrinho)
    }
    

    function revomerProduto(id){

        let carrinho = produtos.filter(item => item.id !== id);

        Cookies.set('carrinho', JSON.stringify(carrinho))

        setProdutos([...carrinho]);
    }


    function alterarProduto(id, qtd){

        let produtoAlterado = produtos.filter(item => item.id === id)[0];
        produtoAlterado.qtd = qtd;

        Cookies.set('carrinho', JSON.stringify(produtos))
    }

    return(
        <Container>
            <div className="cabecalho">
                <Link to="/home"> <img className="voltar" src="/assets/images/voltar.svg" alt="" /> </Link>
                <div className="titulo"> Carrinho </div>
            </div>  
            <div className="itens">
                {produtos.map(item =>
                    <CarrinhoItem key={item.id}
                        info={item}
                        onUpdate={alterarProduto}
                        onRemove={revomerProduto}
                    />    
                )}
            </div>  
        </Container>
    )
}