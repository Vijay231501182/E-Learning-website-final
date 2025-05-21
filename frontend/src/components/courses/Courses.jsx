import React from 'react'
import "./courses.css"
import webDevImg from 'C:\\Users\\tarun\\Desktop\\projects\\e-learning\\frontend\\src\\assets\\web-dev.jpeg';
import osImg from 'C:\\Users\\tarun\\Desktop\\projects\\e-learning\\frontend\\src\\assets\\process-in-os.webp';
import dataScienceImg from 'C:\\Users\\tarun\\Desktop\\projects\\e-learning\\frontend\\src\\assets\\data-science.jpg'
import UIUX from 'C:\\Users\\tarun\\Desktop\\projects\\e-learning\\frontend\\src\\assets\\UI_vs_UX.jpg'
import { useNavigate } from 'react-router-dom';


function Courses() {
    // <div className="courses-action">
    //     <button className="btn btn-outline">View All Courses</button>
    // </div>
    const courses = [
        {
            title: "Operating Systems",
            description: "Learn the fundamentals of OS.",
            duration: "4 weeks",
            level: "Intermediate",
            image: osImg
        },
        {
            title: "Introduction to Web Development",
            description: "Learn the fundamentals of web development",
            duration: "8 weeks",
            level: "Beginner",
            image: webDevImg
        },
        {
            title: "Data Science Essentials",
            description: "Master the core concepts of data science",
            duration: "10 weeks",
            level: "Intermediate",
            image: dataScienceImg
        },
        {
            title: "UX/UI Design Principles",
            description: "Create intuitive and beautiful user interfaces",
            duration: "6 weeks",
            level: "All levels",
            image: UIUX
        },
    ]
    const navigate = useNavigate();
    
    const handleCourses = () => {
        navigate("/courses/operating_systems");
    }

    return (
        <section className="courses">
            <div className="container">
                <h2 className="section-title">Popular Courses</h2>
                <p className="section-description">Discover our most sought-after courses and start learning today.</p>
                <div className="courses-grid">
                    {courses.map((course, index) => (
                        <div className="course-card" key={index}>
                            <div className="course-image">
                                <img src={course.image} alt='webdev-image' />
                            </div>
                            <div className="course-content">
                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-description">{course.description}</p>
                                <div className="course-meta">
                                    <span className="course-info">
                                        {course.duration} • {course.level}
                                    </span>
                                    <button className="course-btn" onClick={handleCourses}>View Course →</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Courses
