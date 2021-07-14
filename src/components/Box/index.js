import styled from "styled-components";

const Box = styled.div`
  background-color: rgba(64, 43, 76, .4);
  border-radius: 8px;

  padding: 16px;
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #54dce9;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    color: #FFFFFF;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;

  }
  .smallTitle {
    color: #FFFFFF;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width:100%;
    background-color: rgba(64, 43, 76, .8);
    border:0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #FFFFFF;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #415ca2;
  }
`;

export default Box;