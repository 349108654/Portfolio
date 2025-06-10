// import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
// import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
    return(
        <>
            <NavBar />
            <Hero />
            {/* <LogoSection /> */}
            {/* <FeatureCards />  */}
            <ExperienceSection />
            <ShowcaseSection />
            <TechStack />
            <Contact />
            <Footer />
        </>
    )
}

export default App
