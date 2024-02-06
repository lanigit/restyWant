import logo from './logo.svg';
import './App.css';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';

// const BusinessObject = {
//     name: 'Mike\'s Food Trough',
//     imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//     address: '811 Somewhere Lane',
//     city: 'Vtown',
//     state: 'WI',
//     zipCode: '53573',
//     category: 'Goooooood',
//     rating: 4.9,
//     review_count: 385
// };

function Business() {
    return ( 
    <div>
        <header><h1>Restuarants</h1></header>
        <p>Current list of restaurants</p>
        <SearchBar />
        <ul id='left-align'><BusinessList /></ul>
    </div>
    )
 };

 export default Business;