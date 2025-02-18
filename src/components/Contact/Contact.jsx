import './Contact.css'
export function Contact(){
    return(
        <section id="Contact">
        <h1>Contact Me</h1> 
        <div className="list-c">
            <form action="" method="post">
                <label for="name">Name:</label>
                <input type="text" placeholder="your name here"/>
                <label for="email">Email:</label>
                <input type="email" placeholder="Your email"/>
                <label for="message">Message:</label>
                <textarea placeholder="Send a text"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>
    )
}