import React, { useEffect, useState } from 'react'
import { Element } from './Element'
export const Grade = (props) => {

  // console.log(props.user);

  const [course, setCourse] = useState(props.user);

  const [grade, setGrade] = useState({});




  // console.log(grade);
  useEffect(() => {
    setCourse(props.user)
    setGrade({})

  }, [props.user])


  // const handleClick = () => {
  //   console.log(grade);
  // }


  let spi = 0;
  let gradeProvided = false;
  const calculateSPI = () =>{
    // console.log(grade);
    let ttl_credit = 0;
    let ttl_marks = 0;
    for (const key in grade) {
      if(grade[key] ==='grade'){
        alert(`Enter A Valid grade for course  ${key}`);
        gradeProvided = false;
        return;
      }
      const particular_course = course.find(element =>element.course===key);
      console.log(particular_course.credit, grade[key]);
      ttl_credit= ttl_credit+particular_course.credit;
      ttl_marks = ttl_marks + particular_course.credit*grade[key];
    }
    console.log(ttl_credit, ttl_marks);
    spi = ttl_marks/ttl_credit;
    console.log(spi);
    gradeProvided = true;
  }

  return (
    <><div className="container ">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>{
          course.map((element) => {
            return <Element key={element.course} courseName={element.course} setGrade = {setGrade} grade={grade} />
          })}
        </tbody>
      </table>

      <button type="button" className="btn btn-outline-dark btn-lg" onClick={calculateSPI}>Calculate SPI</button>

    </div>
    <div className="container">
      
    </div>


    </>
  )
}