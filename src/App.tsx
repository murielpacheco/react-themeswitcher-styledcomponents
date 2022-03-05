import { useState } from "react";
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";

import light from "./themes/light"
import dark from "./themes/dark"

import {Container, Content, LeftContent, RightContent} from "./styles/appStyles"

function App() {
  const [theme, setTheme] = useState(light)
  
  function onChangeTheme(): void {
    setTheme(theme.title === 'light' ? dark : light)
    console.log("theme switched")
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header onChangeTheme={onChangeTheme} />
        <Content>
          <LeftContent />
          <RightContent />
        </Content>
      </Container> 
    </ThemeProvider>
  );
}

export default App;
