import React from 'react'
import Hero from "../componeents/Hero"
import Banner from "../componeents/Banner";
import {Link} from "react-router-dom";
export default function Error() {
    return (
        <div>
            <Hero hero="defaultHero">
                <Banner title="404" subtitle="page not found" >
                   <Link to="/">
                       <button className="btn-primary"> return home</button>
                   </Link>
                </Banner>
            </Hero>

        </div>
    )
}
