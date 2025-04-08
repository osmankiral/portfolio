import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";


interface RoutLayoutChildren {
  children: React.ReactNode;
}

const RoutLayout = ({ children }: RoutLayoutChildren) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="min-h-screen">
      {children}
      </div>
      
      <Footer />
    </div>
  );
};
export default RoutLayout;
