import React from 'react';

function SearchBar() {
    return (
        <div>
            <menu id='left-align'>
                <button>Best Match</button>&nbsp;&nbsp;
                <button>Highest Rated</button>&nbsp;&nbsp;
                <button>Most Reviewed</button>
            </menu>
            <input type='text' placeholder='Search Restaurants' />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type='text' placeholder='Enter Location' />
            <br/>
            <button formAction='#'>Let's Go!</button>
        </div>
    )
}

export default SearchBar;