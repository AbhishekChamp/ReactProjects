import { useState } from "react";
import menu from "./data";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "../Categories";

// const tempCategories = menu.map(item => item.category)
// const tempSet = new Set(tempCategories)
// const tempItems = ['all', ...tempSet]

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
    const [menuItem, setMenuItem] = useState(menu);
    const [categories, setCategories] = useState(allCategories);
    return (
        <main className='menu'>
            <Title text='our menu' />
            <Categories categories={categories} />
            <Menu items={menuItem} />
        </main>
    );
};
export default App;
