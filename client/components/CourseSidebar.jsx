import React from 'react'
import {FaCaretDown} from 'react-icons/fa'

export default class CourseSidebar extends React.Component {
    componentDidMount() {
        this.dropDown()
    }

    dropDown = () => {
        var dropDown = document.getElementsByClassName("dropdown-btn");

        for (let i = 0; i < dropDown.length; i++) {
            dropDown[i].addEventListener("click", () => {
                dropDown[i]?.classList.toggle("active");

            var dropdownContent = dropDown[i]?.nextElementSibling;
            // var computedStyle = window.getComputedStyle(dropdownContent, null).getPropertyValue("display")
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
              } else {
                dropdownContent.style.display = "block";
              }

            })
        };
    }

    render() {
        return (
            <>
                <div className="sidebar">
                    {/*---------- Week 1---------- */}
                    <div className="dropdown">
                        <button className="dropdown-btn">Week 1<FaCaretDown /></button>
                            <div className="dropdown-container" style={{display: 'none'}}>
                                <Link to={`/course/week1/Drugs`}>Drugs</Link>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                        </div>
                    </div>

                    {/*---------- Week 2---------- */}
                    <div className="dropdown">
                        <button className="dropdown-btn">Week 2<FaCaretDown /></button>
                            <div className="dropdown-container" style={{display: 'none'}}>
                                <a href="#">Link a</a>
                                <a href="#">Link b</a>
                                <a href="#">Link c</a>
                            </div>
                    </div>
                </div>
            </>
        )
    }
}

