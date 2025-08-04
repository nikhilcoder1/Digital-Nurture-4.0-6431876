import React, { useState } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [selectedComponent, setSelectedComponent] = useState('books');
  const [showCourses, setShowCourses] = useState(true);

  // Conditional rendering using switch-case and element variable
  let renderedComponent;
  switch (selectedComponent) {
    case 'books':
      renderedComponent = <BookDetails />;
      break;
    case 'blogs':
      renderedComponent = <BlogDetails />;
      break;
    default:
      renderedComponent = <p>Select a valid section</p>;
  }

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>🧠 Blogger Portal</h1>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setSelectedComponent('books')}>Show Books</button>
        <button onClick={() => setSelectedComponent('blogs')}>Show Blogs</button>
        <button onClick={() => setShowCourses(!showCourses)}>
          {showCourses ? "Hide Courses" : "Show Courses"}
        </button>
      </div>

      {renderedComponent}

      {/* Conditional rendering using AND operator */}
      <CourseDetails showCourses={showCourses} />
    </div>
  );
}

export default App;