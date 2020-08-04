import React from "react";

export const Settings = ({selectedTitle, setTitle}, {selectedItem, updateItem}) => {
    const changeName = (event) => {
        setTitle(event.target.value);
    }
    const changeItem = (event) => {
        updateItem(event.target.value);
    }
    return (
        <section>
            <h2>Settings</h2>
            <div>
                <label for="name">Name: </label>
                <input onChange={changeName} type="text" id="name" name="name" value={selectedTitle} />

                <h3>Food Menu</h3>
                <label for="foodItem1">Item 1: </label>
                <input onChange={changeItem} type="text" id="foodItem" name="foodItem" value={selectedItem} />
            </div>
        </section>
    );
};