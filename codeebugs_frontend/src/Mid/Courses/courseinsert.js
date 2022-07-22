import { Formik, FieldArray } from "formik";
import { TextField, Input } from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { Button } from "@material-ui/core";
import SendIcon from '@mui/icons-material/Send';
import { Component } from "react";
import axios from "axios";

class CourseInsert extends Component {

    render() {return <div>
    <Formik
    initialValues={{courseTitle : "",
                    courseDescription : "",
                    tutorName: "",
                    tutorial: [{chapterName : "", video : null}],
                    quiz : [{question : "", correctAnswer : "", 
                            incorrectAnswer : []}]
                    }}


    

    
     onSubmit={values =>{
      console.log('Submit: ',values);
      var input = document.querySelector('input[type="file"]')

      //  const course_data = {
      //   courseTitle : values.courseTitle,
      //   courseDescription : values.courseDescription,
      //   tutorName : values.tutorName,
      //   tutorial : {chapterName : values.tutorial[0].chapterName, video : values.tutorial[0].video},
      //   quiz : values.quiz,
      //  }

      //   axios.post('https://codeebugs.herokuapp.com/addcourse',course_data).then((res)=>{
      //    console.log(res)
      //  })



        const formData = new FormData();
        formData.append('courseTitle', values.courseTitle)
        formData.append('courseDescription', values.courseDescription)
        formData.append('tutorName' , values.tutorName)
        formData.append('tutorial', values.tutorial )
        formData.append('quiz', values.quiz)

        try {
          console.log(values.tutorial)
          axios.post('https://codeebugs.herokuapp.com/addcourse',formData)
          .then((result) => {
            toast.success("Course has been added!", {
                position: toast.POSITION.TOP_CENTER})
        })
        .catch()
        }catch (err){
          console.log(err)
        }
   
        // console.log(values.tutorial[0].video.name)
        //   axios.post("https://codeebugs.herokuapp.com/addcourse",{
        //     courseTitle : values.courseTitle,
        //     courseDescription : values.courseDescription,
        //     tutorName : values.tutorName,
        //     tutorial : {chapterName : values.tutorial[0].chapterName, video : values.tutorial[0].video.name},
        //     // tutorial : values.tutorial,
        //     quiz : values.quiz,

            
          
        //   })
        //   console.log(values.tutorial)
        

        // .then((result)=>{

        //      console.log(result)
        //  })
        //  .catch()
    }}

    > 
    {({values, setFieldValue  , handleChange, handleBlur, handleSubmit}) =>(
        <form onSubmit={handleSubmit}>
        <TextField 
        style={{width : 480}}
        variant="standard"
        label= "Course Title"
        name="courseTitle" 
        values={values.courseTitle} 
        onChange={handleChange} 
        onBlur={handleBlur}/>

        <TextField 
        style={{width : 480}}
        variant="standard"
        label= "Tutor Name"
        name="tutorName" 
        values={values.tutorName} 
        onChange={handleChange} 
        onBlur={handleBlur}/>

        <TextField 
        style={{width : 480}}
        multiline
        variant="standard"
        label= "Course Description"
        name="courseDescription" 
        values={values.courseDescription} 
        onChange={handleChange} 
        onBlur={handleBlur}/>

    <FieldArray name="tutorial">
    {arrayHelpers => (
        <div>
          <Button
            onClick={() =>
              arrayHelpers.push({
                chapterName : "",
                video: "",
              })
            }
          >
            add Chapters
          </Button>
          {values.tutorial.map((chapterName, index) => {
            return (
              <div >
              <Stack direction="row" alignItems="center" spacing={3}>
              <TextField 
              style={{width : 280}}
              variant="standard"
              label= "chapter Name"
              name={`tutorial.${index}.chapterName`} 
              values={`tutorial.${index}.chapterName`} 
              onChange={handleChange} 
              onBlur={handleBlur}/>

              <label htmlFor="icon-button-file">
              <Input name={`tutorial.${index}.video`}
              values={`tutorial.${index}.video`} 
              accept="video/mp4" type="file"
              onChange={(event) => {
                setFieldValue(`tutorial.${index}.video`,event.currentTarget.files[0])
              }}
                />
              <IconButton color="primary" aria-label="upload video" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
                
                <Button onClick={() => arrayHelpers.remove(index)}>
                  x
                </Button>
                </Stack>
              </div>
            );
          })}
        </div>
      )}
        
    </FieldArray>

    <FieldArray name="quiz">
    {arrayHelpers => (
        <div>
          <Button
            onClick={() =>
              arrayHelpers.push({
                question : "",
                correctAnswer: "",
                incorrectAnswer : [{
                  incorrect1 : "",
                  incorrect2 : "",
                  incorrect3 : ""}],
              })
            }
          >
            ????Add Question????
          </Button>
          {values.quiz.map((question, index) => {
            return (
              <div >

              <div>
              <TextField 
              style={{width : 480}}
              variant="standard"
              label= "Question"
              name={`quiz.${index}.question`} 
              values={`quiz.${index}.question`} 
              onChange={handleChange} 
              onBlur={handleBlur}/>
              </div>

              <Stack direction="row" alignItems="center" spacing={2}>
              
              

              <TextField 
              style={{width : 280}}
              variant="standard"
              label= "Correct Answer"
              name={`quiz.${index}.correctAnswer`} 
              values={`quiz.${index}.correctAnswer`} 
              onChange={handleChange} 
              onBlur={handleBlur}/>

              <TextField 
              style={{width : 280}}
              variant="standard"
              multiline
              label= "Incorrect Answer"
              name={`quiz.${index}.incorrectAnswer[0]`} 
              values={`quiz.${index}.incorrectAnswer[0]`} 
              onChange={handleChange} 
              onBlur={handleBlur}/>

              <TextField 
              style={{width : 280}}
              variant="standard"
              multiline
              label= "Incorrect Answer"
              name={`quiz.${index}.incorrectAnswer[1]`} 
              values={`quiz.${index}.incorrectAnswer[1]`} 
              onChange={handleChange} 
              onBlur={handleBlur}/>

              <TextField 
              style={{width : 280}}
              variant="standard"
              multiline
              label= "Incorrect Answer"
              name={`quiz.${index}.incorrectAnswer[2]`} 
              values={`quiz.${index}.incorrectAnswer[2]`} 
              onChange={handleChange} 
              onBlur={handleBlur}/>

                <Button onClick={() => arrayHelpers.remove(index)}>
                  x
                </Button>
                </Stack>
                
              </div>
            );
          })}
        </div>
      )}
        
    </FieldArray>

        <Button endIcon={<SendIcon/>} varient="contained" type="submit">Submit</Button>
        </form>
    )}
    
    </Formik>

    </div>;
  }
}

export default CourseInsert;