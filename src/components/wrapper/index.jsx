import React, { Component } from 'react';
import Navbar from "../navbar/index"
import "./style.css";
import { useSelector } from "react-redux";

const courses = useSelector(state => state.data);

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark-theme"
        }

        this.theming = this.theming.bind(this);
    }

    

    render() {
        return (
            <div id="wrapper" className={this.state.theme}>
                <Navbar theming={this.theming} />
                <p>hey there </p>
                {courses.map(x => <p key={x}>{x}</p>)}
            </div>
        );
    }

    theming() {
        if(this.state.theme === "dark-theme") {
             this.setState({
                theme: "light-theme"
             });
        } else {
            this.setState({
                theme: "dark-theme"
             });
        }
    }

    console.log()

}


export default Wrapper;

    // darkTheme: {
    //     elements: "hhsl(209, 23%, 22%)",
    //     background: "hsl(207, 26%, 17%)",
    //     text: "hsl(0, 0%, 100%)",
    // },
    // lightTheme: {
    //     elements: "hsl(0, 0%, 52%)",
    //     background: "hsl(0, 0%, 98%)",
    //     text: "#333"
    // }