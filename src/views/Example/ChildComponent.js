import React from 'react';

// class ChildComponent extends React.Component {

//     /*
//       JSX => return block
//      */ 
//     render() {
//         console.log(">>> render: ", this.state);
//         let {name, age, address, arrayJob} = this.props;
//         let a = '';
//         return (
//             <>
//                <div className="job-lists">
//                 {
//                     a = arrayJob.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }

//                 {console.log('>> check map array: ', a)}
//                </div>
//             </>
//         )
//     }
// }


const ChildComponent = (props) => {
    console.log(">> check child props: ", props);
    
    let { arrayJob } = props;

    return (
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
        </>
    )
};

export default ChildComponent;
