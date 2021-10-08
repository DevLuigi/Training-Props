import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    .conteudo{
        border: 1px solid #d5d4d6;
        border-radius: 5px;
        box-shadow: 0px 0px 10px 5px #d5d4d6;

        height: 20em;
        width: 30em;
    }

    .contador{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .align-voltar{
        display: flex;
        align-items: flex-start;
        width: 20em;
    }

    .voltar{
        height: 2em;
        width: 2em;

        margin: 1em;
    }

    .fonte, button{
        margin: .5em;
    }

    .fonte{
        font-family: sans-serif;
        font-size: 1.5em;
    }

    button {
        border-radius: 2em;
        border: none;
        outline: none;
        padding: .5em 1.5em;
        
        font-family: sans-serif;
        background-color: #f837b2;
        color: #fff;
        cursor: pointer;
    }
`
export { Container }