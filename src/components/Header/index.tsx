
import { useContext } from "react";
import Switch from "react-switch";

import { ThemeContext } from "styled-components";
import { Container } from './styles';

type Props = {
   onChangeTheme: () => void;
}

export function Header({ onChangeTheme }: Props) {
   const {title, colors} = useContext(ThemeContext)

   return (
      <Container>
         <h3>Theme switcher</h3>
         <Switch
            onChange={onChangeTheme}
            checked={title === 'light'}
            height={16}
            width={40}
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={22}
            offColor={colors.lightGray}
            onColor={colors.offColor}

         />
      </Container>
   )
}