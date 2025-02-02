import { NavBar, Footer } from "@/components";

function DashboardLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default DashboardLayout;
