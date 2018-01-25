import React from 'react';
import "./index.css";
import { NavBar } from './NavBar'


const friends = [
    {
        title: "Benchmade",
        src: "https://static.knifecenter.com/resize/timthumb.php?src=http://static.knifecenter.com/graphics/cover/238.jpg&w=960&q=70"
    },
    {
        title: "B-2 Bomber",
        src: "http://www.theprepperjournal.com/wp-content/uploads/2014/03/Knife.jpg"
    },
    {
        title: "Spartan Harsey",
        src: "https://cdn6.bigcommerce.com/s-3uvmj/products/363/images/513/Harsey_Folder_Clipside_Black_Small__04597.1471290959.1027.677.jpg?c=2"
    }
];


class App extends React.Component {
    render() {
        let friend = friends[0];
        let friend2 = friends[1];
        let friend3 = friends[2];
        return (
            <div className="App">
                <NavBar />
                <div className="flex">
                    <h1>{friend.title}</h1>
                    <img class="friend1" src={friend.src} />
                    <h1>{friend2.title}</h1>
                    <img class="friend2" src={friend2.src} />
                    <h1>{friend3.title}</h1>
                    <img class="friend3" src={friend3.src} />
                </div>

            </div>
        );
    }
}

export default App;