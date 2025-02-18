import './Skills.css'
const skillSet = [
    {img:'assets/kisspng-brand-html-5-coaster-logo-product-design-contest-html-amp-css-2-15-5b6ed204301718.682006931533989380197.png',
     title: 'Html & CSS',
    },
    {
        img:'assets/js.png',
        title: 'JavaScript',

    },
    {
        img:'assets/1174949_js_react js_logo_react_react native_icon.png',
        title: 'JavaScript Framework',
        subtitle: 'React',

    },
    {
        img:'assets/Tailwind_CSS_Logo.svg.png',
        title: 'CSS Framework',
        subtitle: 'Tailwind CSS',

    },
    {
        img:'assets/pngwing.com (1).png',
        title: 'Version Control',
        subtitle: 'Git & Github'

    },
    {
        img:'assets/tools.png',
        title: 'Tools',
        subtitle: 'Visual Studio'

    },
]
export function Skills(){
    return (
            <section id="skills">
                        <h1>Skills</h1>
                        <div className="list-skills">
                                {skillSet.map((item)=>(
                                    <div className="list">
                                    <img src={item.img}/>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                    </div>
                                ))}

                        </div>
            </section>
    )}



