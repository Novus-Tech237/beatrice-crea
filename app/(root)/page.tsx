import Image from "next/image";
import NavigationBar from "./_components/navbar";
import BeatriceHeader from "./_components/header";
import SectionOne from "./_components/section-one";
import QuotePage from "./_components/quote";
import SectionTwo from "./_components/section-two";
import Footer from "./_components/footer";
import About from "./_components/about";
import Heritage from "./_components/produit";
import Testimonials from "./_components/testimonials";
import Contact from "./_components/contact";

const HomePage = () => {
    return ( 
        <div className="flex flex-col min-h-screen">
            <div className="h-auto">
                <div className="hero_area relative bg-pink-950/50">
                    <Image
                        alt="beatrice-creation"
                        src={"/7.jpg"}
                        fill
                        className="absolute inset-0 w-full h-full object-cover -z-10"
                    />
                    <div className="relative z-20">
                        <NavigationBar />
                    </div>
                    <BeatriceHeader/>
                </div>
                <section className="min-h-[720px] bg-[#fef9f2]  w-full">
                    <SectionOne/>
                </section>
                <section className="min-h-[720px]  w-full">
                   <About/>
                </section>
                <section className="min-h-[720px] w-full">
                    <Heritage/>
                </section>
                <section className="w-full">
                    <Testimonials/>
                </section>
                <section className="min-h-[600px] w-full">
                    <Contact/>
                </section>
                <section className="bg-slate-800">
                <Footer/>

                </section>
            </div>
        </div>
    );
}
 
export default HomePage;