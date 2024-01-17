import React from "react";

class AddComponent extends React.Component  {

    state = {
        titleJob: '',
        salary: '',
    }
    
    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        // validation
        if(!this.state.titleJob || !this.state.salary) {
            alert("Require missing value")
            return
        }
        console.log(">> check input: ", this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.titleJob,
            salary: this.state.salary

        })

        this.setState({
            titleJob: '',
            salary: ''
        })
    }

    render () {
        return (
            <>
                <div>Additional Component</div>
                <br></br>
                <form>
                    <label htmlFor="fname">Job's title:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.titleJob}
                        onChange={(event) => this.handleChangeTitleJob(event)} 
                    />
                    <br/>
                    <label htmlFor="lname">Salary:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.salary} 
                        onChange={(event) => this.handleChangeSalary(event)} 
                    />
                    <br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form> 
            </>
        )
    }
}

export default AddComponent