import "./HomePage.css"
import AboutSection from "../components/About";
import ProjectsSection from "../components/Projects";
import TestimonialsSection from "../components/Testimonials";
import ContactSection from "../components/Contact";

const HomePage = () => {
    return ( 
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap" rel="stylesheet" />
            </head>
            <body>
                <div className="homepage">
                    <div id="about">
                        <AboutSection />                        
                    </div>
                    <div id="projects">
                        <ProjectsSection />                        
                    </div>
                    <div id="testimonials">
                        <TestimonialsSection />                        
                    </div>
                    <div id="contact">
                        <ContactSection />                        
                    </div>
                </div>
            </body>
        </html>
     );
}
 
export default HomePage;