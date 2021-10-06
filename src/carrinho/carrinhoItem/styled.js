import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 2em 0em;
    padding: 2em;

    font-family: sans-serif;

    box-shadow: 0px 0px 5px 1px #d5d4d6;
    
    & > div {
      flex-grow: 1;
      text-align: center;
    }

    & > div:nth-child(1) {
      text-align: left;
    }

    .preco{
      display: flex;
      flex-direction: column;
    }

    .qtd{
      display: flex;
      flex-direction: column;
    }

    span {
      font-weight: bold;
      margin-bottom: 1em;
    }
    
    img {
      width: 10em;
      height: auto;

      margin: 1em 0em;
    }

    .remover img {
      width: 3em;
      cursor: pointer;
    }
`

const RemoverIcon = styled.img`
  content: url('/assets/images/delete.png');
`

export { Container, RemoverIcon }