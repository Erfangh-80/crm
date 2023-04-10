import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h2>مشتریان</h2>
        <Link href="/add-customer">مشتری جدید</Link>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        پروژه مشتریان | next.js ssg, ssr, MongoDB  &copy;
      </footer>
    </>
  );
};

export default Layout;
