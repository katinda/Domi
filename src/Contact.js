import React from 'react';


export default function Contact() {

    return (
        <div>
            <p className="adres">
                Rue de Stassart, 48 / Stassartstraat, 48<br/>
                1050 Bruxelles / Brussels<br/>
                <a href="tel:+3222891180">Tel : + 32 2 289 11 80</a><br/>
                VAT: BE <a>0429.049.014</a>
            </p>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.721427965898!2d4.358192311720958!3d50.836323659387745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c48891c479f3%3A0xca90074bc9cd199e!2sRue%20de%20Stassart%2048%2C%201050%20Ixelles!5e0!3m2!1sen!2sbe!4v1715274480682!5m2!1sen!2sbe"
                width="330" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>

            <section style={{ marginBottom:"100px",marginTop:"30px", color:"white",backgroundColor: "black", width: "330px",margin:"auto", paddingTop:"30px",paddingBottom:"30px" }}>
                <h1>So you think you can model ?</h1>
                <p><br/><br/>
                    That’s great ! Please fill out our application form and we will get back to you asap. If you get a
                    negative answer please don’t be offended, the modelling business is very competive and we need to be
                    very selective. But if you like to work in fashion there are so many other jobs. You will find your
                    way!<br/>
                    <br/><br/>
                    If you are under 18 please ask your parents for permission first. We will ask that they come with
                    you to the agency if you get invited for an interview.<br/>
                    <br/><br/>
                    Be careful ! It sometimes happens that unscrupoulous people set up profiles on Facebook or other
                    social media posing as scouts of Dominique. If the mail doesn’t come from prefix@dominiquemodels.com
                    it does not come from Dominique.<br/>
                    <br/><br/>
                    If you have any doubts , don’t hesitate to call the agency +32 2 289 11 80 or mail us at <a
                        href="">info@kvtquemodels.com</a>.<br/>
                    <br/><br/>
                    Never pay anyone to make ‘professional photoshoot’ if you want to apply to an agency. You don’t need
                    one ! We just need to see some clear natural snapshots with little or no make up.</p>
            </section>
        </div>
    )
}