import React from 'react'
import Productcard from './Productcard'
function Viewproducts() {
    
    const array = [
        {
            Title: "Pen",
            Price: "Rs. 10",
            Quantity: "1000",
            New_Price: "Rs. 8"
        },
        {
            Title: "Bag",
            Price: "Rs. 500",
            Quantity: "100",
            New_Price: "Rs. 375"
        },
        {
            Title: "Car",
            Price: "Rs. 10,00,000",
            Quantity: "20",
            New_Price: "Rs. 9,20,000"
        },
        {
            Title: "Fridge",
            Price: "Rs. 69,000",
            Quantity: "100",
            New_Price: "Rs. 42,000"
        }
    ];
    
    return (
        <div>
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
        </div>
    );
}

export default Viewproducts
