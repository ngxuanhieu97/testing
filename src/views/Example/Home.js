import React from "react";
class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            console.log("set timeout");
        }, 2000);
    }
    
    render() {
        console.log(">> check props", this.props);
        return (
            <p>Sweet Home</p>
        );
    }
}

export default Home;