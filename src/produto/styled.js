import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1.5em;
    margin: 1em;
    box-shadow: 0px 0px 5px 1px #d5d4d6;

    align-items: center;


    .capa {
        width: 7em;
        height: 8em;
    }

    .titulo {
        font-family: sans-serif;
        font-weight: bold;
        color: #000;
    }

    .preco {
        font: 400 1.5em Roboto;
        color: #000;
    }

    img {
        width: 10em;
        height: 10em;
    }

    div{
        font-family: sans-serif;
        font-size: 1em;
        margin: 0.5em;
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