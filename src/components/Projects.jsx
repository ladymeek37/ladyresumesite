import CRLW from "../images/CRLW.png"
import Exposure from "../images/Exposure.png"
import SkateHealth from "../images/SkateHealth.png"
import "./Projects.css"

const ProjectsSection = () => {
    return ( 
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap" rel="stylesheet" />
            </head>
            <body>
                <div className="projectspage">
                    <div>
                        <h1 className="myprojstxt">Here's some of my projects:</h1>                        
                    </div>
                    <div>
                        <div>
                            <h2 className="titletxt"><span class="styled-underline">Costa Rica Live Water Properties</span></h2>
                            <a  href="http://crlwproperties.com/LaOnda" className="linktext" target="_blank">crlwproperties.com/LaOnda</a>
                            <div className="projectcontainer">
                                <img className="projectchild"src={CRLW} height='130' width='130'/>
                                <p className="projectchild projectinfotext">Using mySQL, Python, React, and JavaSript, I built and created the database, backend, and frontend for this private property inventory website. The homepage is private, but as requested by the client, individual property pages are public. Linked above is the property page for the “La Onda” property. Featuring photo galleries, YouTube videos, and information on the property.  </p>                               
                            </div>

                        </div>
                        <div>
                            <h2 className="titletxt"><span class="styled-underline">Exposure 2023</span></h2>
                            <a href="https://www.exposureskate.org/" className="linktext" target="_blank">exposureskate.org</a>
                            <br/>
                            <br/>
                            <a href="https://www.exposureskate.org/exposure-2023/" className="linktext" target="_blank">exposureskate.org/exposure-2023</a>
                            <div className="projectcontainer">
                                <img className="projectchild"src={Exposure} height='165' width='165'/>
                                <p className="projectchild projectinfotext">Using WordPress, I created the Exposure 2023 page for the biggest Women’s skateboarding event in the world! I also continually do maintenance and update the main web page according to the founder’s requests.</p>
                            </div>    
                        </div>
                        <div>
                            <h2 className="titletxt"><span class="styled-underline">Skate Health</span></h2>
                            <a href='https://main.d2spnt86fte26a.amplifyapp.com' className="linktext" target="_blank">skatehealth.com</a>
                            <div className="projectcontainer">
                                <img className="projectchild"src={SkateHealth} height='170' width='170'/>
                                <p className="projectchild projectinfotext">For my final Capstone project through Dev Code Camp, I created this website as a tool for skateboarders to progress mentally and physically. Its a public blog-post site where anyone can log in and share! I used mySQL, Python, React, and JavaScript.</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <hr/>

            </body>
        </html>
     );
}
 
export default ProjectsSection;