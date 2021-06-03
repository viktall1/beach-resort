import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../componeents/Title";

//get unique value
const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
    } = context;
    //get unique types
    let types = getUnique(rooms, "type");
    //add all
    types = ["all", ...types];
    //map to jsx
    types = types.map((item, index) => {
        return (
            <option key={index} value={item}>
                {item}
            </option>
        );
    });
    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => {
        return (
            <option key={index} value={item}>
                {item}
            </option>
        );
    });
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type   */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/*end of select type   */}
                {/* select capacity   */}
                <div className="form-group">
                    <label htmlFor="capacity">room type</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/*end of select capacity   */}
                {/* price range   */}
                <div className="form-group">
                    <label htmlFor="price">room price{price}</label>
                    <input
                        type="range"
                        name="price"
                        id="price"
                        max={maxPrice}
                        min={minPrice}
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                {/*end of price range   */}
                {/* size    */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-input">
                        <input
                            type="number"
                            name="minSize"
                            id="minSize"
                            value={minSize}
                            onChange={handleChange}
                            className="size-input"
                        />

                        <input
                            type="number"
                            name="maxSize"
                            id="maxSize"
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                    </div>
                </div>

                {/*end of size    */}
                {/* price range   */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                            className=""
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange}
                            className=""
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*end of price range   */}
            </form>
        </section>
    );
}
