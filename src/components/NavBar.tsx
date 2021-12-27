/** @jsxImportSource theme-ui */
import Link from "next/link";

const NavBar = () => {
  const navItemStyles = {
    color: "text",
    fontSize: 3,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  };

  return (
    <header
      sx={{
        width: "100%",
        bg: "primary",
      }}
    >
      <nav sx={{ variant: "styles.Container", mx: "auto" }}>
        <Link href="/" as={`/`}>
          <a sx={{ ...navItemStyles, pr: 4 }}>HOME</a>
        </Link>

        <Link href="/notes" as={`/notes`}>
          <a sx={navItemStyles}>NOTES</a>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
