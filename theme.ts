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
      cursor: "pointer",
      backgroundColor: "background",
      boxShadow:
        "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
      transition: "background-color ease-in 0.1s",
      "&:hover": {
        backgroundColor: "highlight",
      },
    },
  },
};

export default theme;
