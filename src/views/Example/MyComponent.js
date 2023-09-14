import React from 'react';

class MyComponent extends React.Component {

    // key: value
    state = {
        name: 'Hunter',
        age: '18'
    }

    handleOnChangeName = (event) => {
        // console.log(">>> check local event:" ,event.target.value, event.target, event)

        this.setState({
            name: event.target.value
        });
    }

    handleClickButton = () => {
        alert('Click me');
    }
    /*
      JSX => return block
     */ 
    render() {
        console.log(">>> render: ", this.state);
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
                    <div className="third">
                        <button onClick={() => this.handleClickButton()}>Click Me</button>
                    </div>
                </div>
            </>
        )
    }
}

export default MyComponent;
