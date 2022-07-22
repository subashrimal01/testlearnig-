import axios from "axios";
import { useEffect, useState } from "react";


function EnrolledCourses(){
     const [listcourses, setListcourses] = useState([]);

     useEffect(()=>{
          axios.get("https://codeebugs.herokuapp.com/course/showall")
          .then(res =>{
               setListcourses(res.data.data)
          })
          .catch(err =>{
               console.log(err)
          })
     })
          return(
               <div>
                    <h1>Enrolled Courses</h1>
                    {listcourses.map(course =>(
                         <div key={course._id}>
                         <p>{course.title}</p>
                         <div>{course.enrolledBy.map(id =>(
                              <li>{id.userID}</li>
                         ))}</div>
                         </div>
                    ))}
               
               </div>
          )
}

export default EnrolledCourses;