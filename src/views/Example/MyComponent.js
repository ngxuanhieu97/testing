import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {

    // key: value
    state = {
        arrayJob: [
            { id: 'job1', title: 'developer' , salary: '5000$'},
            { id: 'job2', title: 'tester' , salary: '3000$'},
            { id: 'job3', title: 'pm' , salary: '15000$'},
        ]
    }

    addNewJob = (job) => {
        // console.log(">> check job: ", job);
        this.setState({
            arrayJob: [...this.state.arrayJob, job]
        })
    }

    /*
      JSX => return block
     */ 
    render() {
        console.log(">>> render: ", this.state);
        return (
            <>  
            <AddComponent
                addNewJob={this.addNewJob}
            />

                <ChildComponent 
                    arrayJob={this.state.arrayJob}
                />
            </>
        )
    }
}

export default MyComponent;
