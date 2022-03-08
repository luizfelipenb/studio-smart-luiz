import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        
    }
     :root{


         --color-primary: #7716CC;
         --color-grey-border: #808080;
         --color-rgba-purple-10: rgba(119, 22, 204, 0.1);
         --color-rgba-purple-20: rgba(119, 22, 204, 0.2);
         --color-rgba-blue: rgba(57, 136, 255, 0.1);
         --grey:#E5E5E5;
         --black: #333; 
         --black-2: #1d1d1d;
         --white: #fff;

         
     }

     body{
        background-color: var(--white);
        color: var(--black-2);
        font-family: 'Mulish', sans-serif;
     }

     body input button{
         cursor: pointer;
     }

     a{
         text-decoration: none;
     }

     ul{
         list-style: none;
     }
`;
