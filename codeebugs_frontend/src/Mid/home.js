import { Component } from "react";
import Banner from "./banner";
import Courses from "./courses";
import Courses2 from "./courses2";
import Courses3 from "./courses3";

class Home extends Component{
    render(){
        return(
            <>
            <Banner></Banner>
            <Courses></Courses>
            <Courses2></Courses2>
            <Courses3></Courses3>
            </>
            
        )
    }
}

export default Home;