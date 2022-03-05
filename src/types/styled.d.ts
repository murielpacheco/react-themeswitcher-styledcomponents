import "styled-components";

declare module "styled-components" {
   export interface DefaultTheme {
      title: string;
      colors: {
         primary: string;
         secondary: string;
         lightGray: string;
         offColor: string;
         backgroundColor: string;
         textColor: string;
      }
   }
}