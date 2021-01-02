import React from 'react'
import CourseSidebar from './CourseSidebar';
import CourseContainer from './CourseContainer';

export default class Course extends React.Component {
    render() {
        return (
            <>
                <CourseSidebar/>
                
                <CourseContainer/>

            </>
        )
    }
}


