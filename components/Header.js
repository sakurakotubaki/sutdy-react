import Link from "next/link";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.Header}>
      <h1>foo</h1>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
  );
}
