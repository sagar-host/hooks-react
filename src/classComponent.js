import React from 'react'

class ClassComponent extends React.Component {

state = {
    message: "class component",
    time: new Date().toString()
};

componentDidMount(){
    console.log("i am from did mount");
    this.interval = setInterval(this.showDate, 1000);
}

componentDidUpdate() {
    console.log("i am update");
}

componentWillUnmount(){
    console.log("i am from unmount");
    clearInterval(this.interval)
}

showDate = ()=>{
    this.setState({ time: new Date().toString()});
}

    render(){
        return (
            <div>classComponent</div>
          )
    }

}

export default ClassComponent