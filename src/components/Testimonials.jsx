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
                        <p className="testimonialtext">“Lady created a super cool website for me. She did it in a timely fashion, and added a lot of features that I really like. I would highly recommend her to anyone." - Joel, Owner of CRLW</p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <p className="testimonialtext">"Lady Meek is a very talented web designer. She created multiple new pages for our organization's website complete with graphics, a mobile-friendly layout and sub-menus. She is very responsive to edits and is very quick to make updates. She remains easy to reach and access and makes herself available. She is sure to get full approval before publishing changes. Lady is great to work with!" - Ameila Brodka, Co-Founder of Exposure </p>
                    </div>                       
                </div>
                <hr/>

            </body>
        </html>
     );
}
 
export default TestimonialsSection;