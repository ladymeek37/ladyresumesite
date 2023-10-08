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
                </div>
                <hr/>

            </body>
        </html>
     );
}
 
export default TestimonialsSection;