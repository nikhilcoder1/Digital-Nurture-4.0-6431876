import React from 'react';

const CourseDetails = ({ showCourses }) => {
  const courses = [
    { id: 101, name: "React Fundamentals" },
    { id: 102, name: "Advanced React" }
  ];

  if (!showCourses) return null; // Prevent rendering

  return (
    <div>
      <h2>📖 Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
