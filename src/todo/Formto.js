import React, { useState } from 'react'


function Formto(props) {
    const [item, setItem] = useState("");
    const handleChange = (e) => {
        setItem(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        setItem('');
    }

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>

                <div className='row'>
                    <div className='col-12'>
                        <input className='todo-input' type="text" placeholder='Add Todo' name="addTodo" value={item} onChange={handleChange} />
                        <button className='btn btn-primary todo-button'> Submit</button>
                    </div>



                </div>


            </form>
        </div >
    )
}

export default Formto