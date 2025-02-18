import PropTypes from "prop-types";
import { Socials } from "../Socials/Socials";

import './Intro.css'


export function Intro({introData}){
    return(
        <section className="intro">
        <div className="text">
            <div className="name">
                {/* <p>I'M</p> */}
                <h1>{introData.name}</h1>
            </div>
            <h3>{introData.designation}</h3>
          <Socials/>
        </div>
        {/* <div className="img">
            <img src="assets/360_F_601291576_9vcyvR9S6YtTQjHLXsSQT25ziNUgR9Ec.jpg"/>
        </div> */}
    </section>
    )
}
Intro.proptypes ={
    introData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    designation : PropTypes.string.isRequired,
    }).isRequired
}