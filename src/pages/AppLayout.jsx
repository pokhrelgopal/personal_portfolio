import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const AppLayout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default AppLayout;
