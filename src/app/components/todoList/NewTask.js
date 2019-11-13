import React from "react";

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        const { createNewTask, searchValue, setSearchValue, setCategory } = this.props;

        return (
            <>
{/* vrepovati sve u FORM element sa onSubmit i dodati funkciju creteNewTast tom atributu onSubmit */}
                <div className="add-task">
                    <input type="search" value={searchValue} onChange={setSearchValue} placeholder="Add task. . ." />
                    <button onClick={createNewTask}>Add</button>
                </div>
                <div className="category">
                    <p> Category:</p>
                    <label htmlFor="sport" className="category-item"> Sport</label>
                    <input type="radio" name="category" value="sport" id="sport" onClick={setCategory} />
                    <label htmlFor="business" className="category-item">Business</label>
                    <input type="radio" name="category" value="business" id="business" onClick={setCategory} />
                    <label htmlFor="social" className="category-item">Social</label>
                    <input type="radio" name="category" value="social" id="social" defaultChecked onClick={setCategory} />
                </div>
                
            </>
        )
    }
}


export default NewTask;