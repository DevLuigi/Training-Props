import styled from "styled-components";

const Container = styled.div`
    font-family: sans-serif;
    padding: 2em;
    height: 100vh;

    .voltar{
        height: 2em;
        width: 2em;
    }

    .produto{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .alinhando{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 90vw;
    }

    .titulo{
        font-weight: bold;
        font-size: 1.5em;

        margin: .5em 0em;
    }

    .conteudo{
        margin: 1em 0em;
    }

    .conteudoDesc{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 20em;
    }

    img{
        height: 25em;
        width: 25em;
    }

    button {
        border-radius: 2em;
        border: none;
        outline: none;
        padding: .7em 3em;
        
        font-family: sans-serif;
        font-size: 1em;

        background-color: #f837b2;
        color: #fff;
        cursor: pointer;

        margin: 2em 0em;
        width: 10em;
    }

`

export { Container }