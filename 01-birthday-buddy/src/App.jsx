import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
    const [people, setPeople] = useState(data);

    const togglePeople = (people) => {
        console.log(people);
        if (people.length === 0) {
            return setPeople(data);
        } else {
            return setPeople([]);
        }
    };

    return (
        <main>
            <section className='container'>
                <h3>{people.length} birthdays today</h3>
                <List people={people} />
                <button
                    type='button'
                    className='btn btn-block'
                    onClick={() => togglePeople(people)}
                >
                    {people.length === 0 ? "Populate All" : "Clear All"}
                </button>
            </section>
        </main>
    );
};
export default App;
