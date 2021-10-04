import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading'
import Title from './Title'
import Room from './Room'

export default class FeaturedRooms extends Component {
    // static contextType = RoomContext;

    render() {
        let { featuredRooms: rooms, loading } = this.context;
        const roomsList = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> :
                        roomsList
                    }
                </div>
            </section>
        )
    }
}
FeaturedRooms.contextType = RoomContext;

