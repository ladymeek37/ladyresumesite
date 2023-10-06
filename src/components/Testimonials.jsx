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
                        <p>“Lady helped me build the website of my dreams. You can tell that she built this website with love and consideration for what I was looking for. I definitely enjoyed working with Lady, and I strongly recommend her to anyone small business owner who needs a site.”          - Amanda Joe, owner of Good for You Bakery</p>
                    </div>                    
                </div>
                <hr/>

            </body>
        </html>
     );
}
 
export default TestimonialsSection;