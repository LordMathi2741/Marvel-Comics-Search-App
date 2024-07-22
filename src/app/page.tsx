import Image from "next/image";
import HomeScreen from "@/app/public/home-screen.component";
import Footer from "@/app/public/footer-content.component";
import "primereact/resources/themes/lara-light-cyan/theme.css";




export default function Home() {
  return (
      <div>
          <HomeScreen/>
          <Footer/>
      </div>
  );
}
