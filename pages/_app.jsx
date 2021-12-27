/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";

import NavBar from "../src/components/NavBar";
import theme from "../theme";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div sx={{ variant: "styles.Container", mx: "auto" }}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
