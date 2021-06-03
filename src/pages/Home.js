import React from 'react'
import Hero from "../componeents/Hero"
import Banner  from "../componeents/Banner";
import Services from '../componeents/Services'
import FeaturedRooms from '../componeents/FeaturedRooms'

import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
          
            <Hero >
                <Banner title="luxurious rooms" subtitle="delux rooms starting from 5000 ">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms/>
          
        </>
    )
}
