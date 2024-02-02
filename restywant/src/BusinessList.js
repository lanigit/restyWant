import React from 'react'

function BusinessList() {
    const restaurants = [ 
        { 
          name: "Mike's",
          address: "134 Yo Fridge",
          ratings: "8"
        },
        { name: "Allie's",
          address: "134 Yo Fridge",
          ratings: "6"
        },
        { name: "Katie's",
          address: "134 Yo Fridge",
          ratings: "10"
        }
     ];

    // NEED MAP FUNCTION TO WORK HERE
    const restVals = restaurants.map((val) => {
       return (
            <div>
                <li>Restuarant Name:<br/> &nbsp;&nbsp; <strong>{val.name}</strong></li>
                <li>Address:<br/> &nbsp;&nbsp; <strong>{val.address}</strong></li>
                <li>Avg Ratings:<br/> &nbsp;&nbsp; <strong>{val.ratings}</strong></li>
            </div>
        )
    });
    return <ul>{restVals}</ul>

};

export default BusinessList;