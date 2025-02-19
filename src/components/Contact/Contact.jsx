import './Contact.css'
export function Contact(){
    return(
        <section id="Contact">
        <h1>Contact Me</h1> 
        <div className="list-c">
            <form  action="https://formspree.io/f/mbldqazd" method="POST">
                <label> Name:
                <input type="text" placeholder="your name here" name='text'/>
                </label>
                <label>Email:
                <input type="email" placeholder="Your email" name='email'/>
                </label>
                <label>Message:
                <textarea placeholder="Send a text" name='message'></textarea>
                </label>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>
    )
}