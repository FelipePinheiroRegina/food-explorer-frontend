import styled from "styled-components"

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-columns: 32.0rem;
   place-content: center;
   gap: 7.0rem;

   @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
      grid-template-columns: repeat(2, 1fr);
      
   }
` 

export const Slogan = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   gap: 1rem;

   img {
      height: 4.3rem;
      width: 4.3rem;
   }

   h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      font-family: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_42.fontFamily};
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_42.fontWeight};
      font-size: ${({ theme }) => theme.FONTS.ROBOTO.BOLD_42.fontSize};
   }

   @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
      justify-content: center;
   }
`

export const Form = styled.form`
   width: 100%;
   display: flex;
   flex-direction: column;

   gap: 3.2rem;

   padding: 0 1rem;

   > h2 {
      display: none;
   }
   
   > label {
      display: flex;
      flex-direction: column;
      gap: .8rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_400}; 

      font-family: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontFamily};
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontWeight};
      font-size: ${({ theme }) => theme.FONTS.ROBOTO.REGULAR_16.fontSize};
   }

   .hook {
      width: 100%;
   }

   @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LG}) {
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      width: 45.0rem;
      margin: auto;

      padding: 6.4rem;
      border-radius: 1.6rem;

      > h2 {
         display: block;
         text-align: center;

         color: ${({ theme }) => theme.COLORS.LIGHT_100}; 

         font-family: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontFamily};
         font-weight: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontWeight};
         font-size: ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400.fontSize};
      }
   }

`