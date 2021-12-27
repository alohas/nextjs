import { swiss } from "@theme-ui/presets";

const theme = {
  ...swiss,
  containers: {
    page: {
      width: "100%",
      maxWidth: "960px",
      m: 0,
      mx: "auto",
    },
  },
  styles: {
    ...swiss.styles,
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
    },
  },
};

export default theme;
