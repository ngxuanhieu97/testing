import React from 'react';

class MyComponent extends React.Component {

    // key: value
    state = {
        name: 'Hunter',
        age: '18'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    /*
      JSX => return block
     */ 
    render() {
        
        return (
            <>
                <div className="container" >
                    <div className="first"> 
                        <input  
                            value ={this.state.name}
                            type="text"
                            onChange={(event) => this.handleOnChangeName(event)}
                        />
                        My name is {this.state['name']}
                    </div>
                    <div className="second">
                        My age: {this.state.age}
                    </div>
                </div>
            </>
        )
    }
}

export default MyComponent;
