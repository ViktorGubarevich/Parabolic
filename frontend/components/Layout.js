import Nav from "./Nav";
import Footer from "./Footer";
import { UserProvider } from "../lib/authContext";

const Layout = ({ user, children, categories }) => (
  <UserProvider value={{user}}>
    <Nav categories={categories} />

    <main className="bg-[#F1F2F6] grow px-4 pt-20">
      <div className="flex justify-center w-[825px] mx-auto py-16">
        <div>{children}</div>
      </div>
    </main>

    <Footer />
  </UserProvider>
);

export default Layout;
