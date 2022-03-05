import style from 'styled-components';

export const Container = style.div`
   width: 100%;
   height: 5rem;
   background: ${props => props.theme.colors.primary};

   padding: 0 1rem;

   display: flex;
   align-items: center;
   justify-content: space-between;

   h3 {
      margin: 0;
      padding: 0;
      color: ${props => props.theme.colors.textColor};
   }  
`;