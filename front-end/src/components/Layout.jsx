import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <Sidebar />
      <main className="layout-main">{children}</main>

      <style jsx>{`
        .layout-wrapper {
          display: flex;
          background-color: #f8f5f2;
        }

        .layout-main {
          padding-left: 200px;
          padding-top: 60px;
          width: 100%;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}
