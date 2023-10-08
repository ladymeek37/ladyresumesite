import LadyWAStreet from "../images/Lady-WAStreet-3.jpeg"
import "./About.css"

const AboutSection = () => {
    return ( 
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap" rel="stylesheet" />
            </head>
        <body>
            <div className="about-container">
                <div className="about-child">
                    <img src={LadyWAStreet} alt=" Photo of Lady" width="500" height="500" className="aboutimage"/>
                </div>
                <div className="about-child">
                    <h1 className="hi">Hi!</h1>
                    <p>
                        My name is Lady Meek. I am a full-stack (frontend & backend) freelance website developer in the San Diego area. 
                        I’m a recent graduate of Dev Code Camp. For frontend development, I have knowledge and experience with React.js, 
                        WordPress and Shopify. Fluent in the languages of Python, JavaScript, HTML and CSS, 
                        I enjoy building visually creative, easy to use and stylish websites for motivated individuals!
                    </p>
                </div>

            </div>
            <div>
                    <p className="bottomtextsectionline"> Currently, my work consists of building and managing freelance sites, along with some various website development side projects.</p>
                    <p className="bottomtextsectionline">Outside of coding, I'm an avid skateboarder and surfer. I enjoy cooking, embroidery, creating art and traveling. </p>
                    <p className="bottomtextsectionline">Whether you're a business owner looking to get started on a web development project, a developer looking to collaborate on something cool, or just wanting to say hi, shoot me a message and let's work together. </p>
            </div>
            <hr classname= "specialline" />
        </body>
    </html>
     );
}
 
export default AboutSection;