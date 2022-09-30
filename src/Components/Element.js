import React from 'react'

export const Element = (props) => {
    const setGrade = props.setGrade;
    const grade = props.grade
    // let GradeSelected = 0;

    const handleSelect = async (e) => {
        e.preventDefault();
        // console.log({ [e.target.name]: e.target.value });

        // console.log(e.target);

        setGrade({ ...grade, [e.target.name]: e.target.value });
        // GradeSelected = 1;

    }

    return (
        <tr>
            <td>{props.courseName}</td>
            <td>
                <select className="form-select" id='semester' name={props.courseName} aria-label="Default select example" placeholder='select semester' onChange={handleSelect}>
                    <option defaultValue value="grade"  >Grade</option>
                    <option value={10}>AA</option>
                    <option value={9}>AB</option>
                    <option value={8}>BB</option>
                    <option value={7}>BC</option>
                    <option value={6}>CC</option>
                    <option value={5}>CD</option>
                    <option value={4}>DD</option>
                    <option value={0}>F</option>
                </select>
            </td>
        </tr >

    )
}
