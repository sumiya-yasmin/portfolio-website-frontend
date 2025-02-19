import './Socials.css'
export function Socials() {
  return (
    <div className="social">
    <ol>
        <li><a href="https://www.linkedin.com/in/sumiya-yasmin/"><i className='bx bxl-linkedin' ></i></a></li>
        <li><a href="https://github.com/sumiya-yasmin"><i className='bx bxl-github'></i></a></li>
        <li className='gmail'><a href="mailto:rahmansimi3996@gmail.com"><img src={`${import.meta.env.BASE_URL}assets/gmail.png`}/></a></li>
    </ol>
</div>
  )
}
