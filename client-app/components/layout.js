import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const header = isRoot ? (
    <h1 className={styles.title}>
      <Link href="/">
        <a>Command Library</a>
      </Link>
    </h1>
  ) : (
    <h1 className={styles.titleNotRoot}>
      <Link href="/">
        <a>Command Library</a>
      </Link>
    </h1>
  );

  return (
    <div>
      <div className={styles.content}>
      <header>{header}</header>
      <main className={styles.main}>{children}</main>
      </div>
      <footer className={styles.footer}>
        © {new Date().getFullYear()}, by Beixa 🐮
      </footer>
    </div>
  );
}
