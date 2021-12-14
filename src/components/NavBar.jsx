/** @jsxImportSource theme-ui */
import Link from "next/link";

const NavBar = () => (
  <header
    sx={{
      width: "100%",
      bg: "primary",
    }}
  >
    <nav sx={{ variant: "styles.Container", mx: "auto" }}>
      <Link href="/" as={`/`}>
        <a sx={{ fontWeight: "bold", fontSize: 4, cursor: "pointer" }}>Home</a>
      </Link>

      <Link href="/notes" as={`/notes`}>
        <a sx={{ color: "text", fontSize: 3, cursor: "pointer" }}>Notes</a>
      </Link>
    </nav>
  </header>
);

export default NavBar;
