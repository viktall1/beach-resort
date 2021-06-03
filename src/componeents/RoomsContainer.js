// import React from 'react'
// import RoomsFilter from './RoomFilter'
// import RoomList from './RoomList'
// import { RoomConsumer } from '../context'
// import Loading from "./Loading";
// export default function RoomsContainer() {
//     return (

//         <RoomConsumer>
//             {(value) => {
//                 const { loading, sortedRooms, rooms } = value;
//                 console.log(value)
//                 if (loading) {
//                     return <Loading />
//                 }
//                 return (<div>
//                     hello from rooms container
//                     <RoomsFilter rooms={rooms} />
//                     <RoomList sortedRooms={sortedRooms} />

//                 </div>
//                 );

//             }}
//         </RoomConsumer>

//     )
// }

import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../context'
import Loading from "./Loading";

function RoomsContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />

        </>
    );
}
export default withRoomConsumer(RoomsContainer);