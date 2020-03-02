import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    body {
        font-family:'Song Myung', sans-serif;
    }
    a {
        color: black;
        text-decoration:none !important;
        :hover{
            color: black;
        }
    }
    input:focus {
        outline:none;
    }
`;
