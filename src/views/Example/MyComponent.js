import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponent extends React.Component {

    // key: value
    state = {
        firstName: '',
        lastName: '',
        arrayJob: [
            { id: 'job1', title: 'developer' , salary: '5000$'},
            { id: 'job2', title: 'tester' , salary: '3000$'},
            { id: 'job3', title: 'pm' , salary: '15000$'},
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }



    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    /*
      JSX => return block
     */ 
    render() {
        console.log(">>> render: ", this.state);
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)} 
                    />
                    <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.lastName} 
                        onChange={(event) => this.handleChangeLastName(event)} 
                    />
                    
                </form> 

                <ChildComponent 
                    arrayJob={this.state.arrayJob}
                />
            </>
        )
    }
}

export default MyComponent;
