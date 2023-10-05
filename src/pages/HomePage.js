import "./HomePage.css"
import AboutSection from "../components/About";

const HomePage = () => {
    return ( 
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet" />                  
            </head>
            <body>
                <div className="homepage">
                    <AboutSection />
                </div>
            </body>
        </html>
     );
}
 
export default HomePage;