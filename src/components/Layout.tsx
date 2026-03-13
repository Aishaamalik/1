import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 pt-16 md:pt-20">{children}</main>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Layout;
