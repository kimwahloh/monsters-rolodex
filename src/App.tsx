import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {

    const [searchField, setSearchField] = useState(''); //[value, setValuie]
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters); //in case the initial value is something else, so save same as the previous 'monsters' to be safe

    console.log('render');

    //204, 205
    useEffect(() => {
      const fetchUsers = async () => {
        const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
        setMonsters(users);
      };

      fetchUsers();
    }, []);


    //(ii) filter through and if notice we have new monsters; listening to searchField changes
    useEffect (() => {
      const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });

       //(iii) filter through these monsters and call setFilteredmonsters whenever either the monsters array OR the search field changes
      setFilteredMonsters(newFilteredMonsters); 
    }, [monsters, searchField]);
    
    //(i) it receives the event a lowercase, and then it calls setSearchField  
    //205
    const onSearchChange =(event: ChangeEvent<HTMLInputElement>): void => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
    //This line calls the setSearchField function to update the searchField state variable with the new value stored in searchFieldString. 
      setSearchField(searchFieldString);
  };

  return (
    <div className="App">
     <h1 className='app-title'>Monster Rolodex</h1>
    
      <SearchBox 
        className='monsters-search-box' 
        placeholder='search monsters' 
        onChangeHandler={onSearchChange} 
       />
       <CardList monsters={filteredMonsters} />
    </div>

  );
};




/*  class App extends Component {
//   constructor() {
//     super();

//   //to set the initial value of the state object 
//     this.state = {
//       monsters: [],  
//   //NEW 43: previously searchstring only available inside the callback, but not inside of the component, so need to put it inside of state
//   //NEW 43: empty string bcz any future filters that we wanted should made on the full list of monsters; always filter from the full list
//       searchField: ''
//     };
//   }


  // componentDidMount() {
    
        this.setState(() => {
            return { monsters: users };
          }
        )
      );
  }

//   //NEW 44: move it out and create new method; suppose to update APP.JS the state seachfield value
//   onSearchChange = 
//             });
//   };
          

//       //encapsulates the entire UI rendering of all the monsters that we want to show
//       //template of HTML (initial UI)
//       //add search box
//   render() {
//     // console.log('render from AppJS');

//       //NEW 44: ES6 destructing
//           const { monsters, searchField } = this.state;
//           const { onSearchChange } = this;

//       //filter over the monsters, if the name includes the search string/ field then keep it
//       //filteredMonsters will provide a new array
//       // NEW 43: make it outside of 'return' 
//       //NEW 43: change to 'this.state.searchField' for 'filteredMonsters'; got 'searchField' dy so able to filter it down from the ori list of monsters 
//           


//     return (
      
//         
//        </div>
//     );
//   }
// } }*/

export default App;
