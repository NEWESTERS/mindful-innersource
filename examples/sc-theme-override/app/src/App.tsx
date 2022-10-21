import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "ui-kit";

import Block from "./Block";
import { theme } from "./theme";

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Block>
        <Button />
      </Block>
    </ThemeProvider>
  );
};

export default App;
