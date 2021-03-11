import React, { Fragment } from 'react';

class StorePicker extends React.Component{
    render(){
        // return <p>I am the Store picker!</p>
        //JSX
        // return React.createElement('p', { className: 'hey'}, 'REACT NSX');
        return (
        <Fragment>
        { /*Thi is a JSX comment */ }
            <p>Fish</p>
            <form className='store-selector'>
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name"/>
                <button type="submit">Visit Store</button>
            </form>
        </Fragment>
        );
    }
}

export default StorePicker;