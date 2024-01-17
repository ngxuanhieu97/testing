import React from 'react';
import './Demo.css';
class ChildComponent extends React.Component {

    /*
      JSX => return block
     */ 

    /**
     * declare default value
     */
    state = {
        showJobs: false
    }
    
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log(">>> handleOnClickDelete: ", job)
        this.props.deleteAJob(job);
    }
    render() {
        let { arrayJob } = this.props;
        let { showJobs } = this.state;
        // let  flag = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        // console.log(">> check flag: ", flag);
        return (
            <>
                { showJobs === false ? 
                    <>  
                    <div><button 
                    className="btn-show"
                    onClick={() => this.handleShowHide()} >Show</button></div>
                    </>
                :
                    <>
                        <div className="job-lists">
                            {
                                arrayJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></> <span onClick={() => this.handleOnClickDelete(item)}>X</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()} >Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}


export default ChildComponent;
