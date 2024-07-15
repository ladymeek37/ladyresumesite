import "./Testimonials.css"

const TestimonialsSection = () => {
    return ( 
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap" rel="stylesheet" />
            </head>
            <body>
                <div className="testimonialssection">
                    <div className="testimonialstitletext">
                        <h1>Testimonials:</h1>
                    </div>
                    <div>
                        <p className="testimonialtext">“Lady created a super cool website for me. She did it in a timely fashion, and added a lot of features that I really like. I would highly recommend her to anyone." </p> <p className="testimonialtext">- Joel, Owner of CRLW</p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <p className="testimonialtext">"Lady Meek is a very talented web designer. She created multiple new pages for our organization's website complete with graphics, a mobile-friendly layout and sub-menus. She is very responsive to edits and is very quick to make updates. She remains easy to reach and access and makes herself available. She is sure to get full approval before publishing changes. Lady is great to work with!" </p> <p className="testimonialtext">- Ameila Brodka, Co-Founder of Exposure </p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <p className="testimonialtext">"We would like everyone to know what a gem we found
in Lady Meek. We built our own web site many years ago using
Adobe Dreamweaver. We were able to update pricing and add
pages and pictures as we wished. What we could not do with our
DIY skills was to edit our pages to be viewed properly on mobile
devices. We contacted Lady Meek who quickly converted our old
school web presence to a fully working site for both desktops &amp;
mobile devices. Not an easy task. Now mechanics can access our
pages on their phones at the jobsite, viewing standard gasket sizes
as well as pressure and temperature limitations, helping them to
make the correct choice of gaskets and tubular boiler glass
immediately. We highly recommend Lady Meek for your web
creation and support."   </p>
<p className="testimonialtext">- Gordon Kraft
Sales/Admin for Kraft Industrial Supplies</p>
                    </div>                        
                </div>
                <hr/>

            </body>
        </html>
     );
}
 
export default TestimonialsSection;