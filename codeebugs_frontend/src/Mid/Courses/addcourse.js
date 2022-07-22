import { Component } from "react";
import axios from "axios";
import {toast} from "react-toastify";


class CourseAdd extends Component {
    state = {
        courseTitle: "",
        courseDescription: "",
        coursePrice: "",
        tutorName: "",
        filename: null
    }

    textChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileChangeHandler = (e) => {
        this.setState({
            filename: e.target.files[0],
        })
    }


    sendData = (e) => {
        e.preventDefault();
        const data = new FormData();

        data.append('courseTitle', this.state.courseTitle)
        data.append('courseDescription', this.state.courseDescription)
        data.append('coursePrice', this.state.coursePrice)
        data.append('courseImage', this.state.filename)
        data.append('tutorName', this.state.tutorName)
        axios.post("https://codeebugs.herokuapp.com/addcourse", data)
            .then((result) => {
                console.log(result)
                toast.success("Course has been added!", {
                    position: toast.POSITION.TOP_CENTER})
            })
            .catch()
        // window.location.href="/courseinsert"
    }

    render() {
        return (
            <section className="class-area2 bg-fdf6ed pt-100 pb-70">
                <div className="cont" id="container">
                    <div className="d-flex justify-content-center">
                        <div className="form-container col-lg-8 ">
                            <form>
                                <h1>Add Course</h1>
                                <div class="row">
                                    <input type="text" name="courseTitle" placeholder="Course Title"
                                        value={this.state.courseTitle} onChange={this.textChangeHandler} />
                                    <input type="text" name="courseDescription" placeholder="Course Description"
                                        value={this.state.courseDescription} onChange={this.textChangeHandler} />
                                    <input type="text" name="coursePrice" placeholder="Course Price"
                                        value={this.state.coursePrice} onChange={this.textChangeHandler} />
                                    <input type="text" name="tutorName" placeholder="Course Lecturer"
                                        value={this.state.tutorName} onChange={this.textChangeHandler} />
                                    <label>Upload Course Image</label>
                                    <input type="file" accept="image/*" name="filename" onChange={this.fileChangeHandler} />
                                    <div className="center"><button type="submit" onClick={this.sendData}>Add</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default CourseAdd;