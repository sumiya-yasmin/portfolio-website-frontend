import './Skills.css'
const skillSet = [
    {img:`${import.meta.env.BASE_URL}assets/kisspng-brand-html-5-coaster-logo-product-design-contest-html-amp-css-2-15-5b6ed204301718.682006931533989380197.png`,
     title: 'Html & CSS',
    },
    {
        img:`${import.meta.env.BASE_URL}assets/js.png`,
        title: 'JavaScript',

    },
    {
        img:`${import.meta.env.BASE_URL}assets/1174949_js_react js_logo_react_react native_icon.png`,
        title: 'JavaScript Framework',
        subtitle: 'React',

    },
    {
        img:`${import.meta.env.BASE_URL}assets/Tailwind_CSS_Logo.svg.png`,
        title: 'CSS Framework',
        subtitle: 'Tailwind CSS',

    },
    {
        img:`${import.meta.env.BASE_URL}assets/pngwing.com (1).png`,
        title: 'Version Control',
        subtitle: 'Git & Github'

    },
    {
        img:`${import.meta.env.BASE_URL}assets/tools.png`,
        title: 'Tools',
        subtitle: 'Visual Studio'

    },
]
export function Skills(){
    return (
            <section id="skills">
                        <h1>Skills</h1>
                        <div className="list-skills">
                                {skillSet.map((item, index)=>(
                                    <div className="list" key={index}>
                                    <img src={item.img}/>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                    </div>
                                ))}

                        </div>
            </section>
    )}



