import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    body {
        font-family:'Song Myung';
    }
    a {
        color: black;
        text-decoration:none !important;
        :hover{
            color: black;
        }
    }
    input {
        font-family:'Nanum Gothic';
    }
    input:focus {
        outline:none;
    }
    .modal{
        font-family:'Nanum Gothic';
    }
`;
