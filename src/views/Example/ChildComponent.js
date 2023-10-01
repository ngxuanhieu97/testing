import React from 'react';

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
    render() {
        let { arrayJob } = this.props;
        let { showJobs } = this.state;
        // let  flag = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        // console.log(">> check flag: ", flag);
        return (
            <>
                { showJobs === false ? 
                    <>  
                    <div><button onClick={() => this.handleShowHide()} >Show</button></div>
                    </>
                :
                    <>
                        <div className="job-lists">
                            {
                                arrayJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
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
