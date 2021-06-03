import React from 'react'
import Hero from "../componeents/Hero"
import Banner from "../componeents/Banner";
import RoomsContainer from '../componeents/RoomsContainer'
import { Link } from "react-router-dom";


export default function Rooms() {
    return (
        <>

            <Hero hero="roomsHero">
                <Banner title="our rooms" subtitle=" " >
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />

        </>
    )
}
