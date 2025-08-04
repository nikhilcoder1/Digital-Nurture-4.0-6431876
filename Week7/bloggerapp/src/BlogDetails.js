import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: "Understanding JSX", author: "Jane" },
    { id: 2, title: "React Performance Tips", author: "John" }
  ];

  return (
    <div>
      <h2>📝 Blog Details</h2>
      {blogs.length > 0 ? (
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <strong>{blog.title}</strong> - {blog.author}
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default BlogDetails;