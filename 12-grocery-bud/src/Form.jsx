import { useState } from "react";

function Form({ addItem }) {
    const [newItemName, setNewItemName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItemName) return;
        addItem(newItemName);
        setNewItemName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>grocery bud</h4>
            <div className='form-control'>
                <input
                    type='text'
                    className='form-input'
                    value={newItemName}
                    onChange={(event) => setNewItemName(event.target.value)}
                />
                <button type='submit' className='btn'>
                    Add Item
                </button>
            </div>
        </form>
    );
}

export default Form;
