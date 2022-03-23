import React, { Component } from 'react';

class SelectCollege extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Hey this is Select College page!..</h1>
                    <h2>Select your college</h2>
                    <select name="cars" id="cars">
                        <option value="volvo">College1</option>
                        <option value="saab">College2</option>
                        <option value="mercedes">College3</option>
                        <option value="audi">College4</option>
                    </select>
                    <button>next</button>
                </div>

            </div>
        );
    }
}

export default SelectCollege;