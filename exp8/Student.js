import React from 'react';
import './Student.css';

function Student() {
  return (
    <div>
      <h1>To-Do List</h1>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Buy groceries</td><td className="pending">Pending</td></tr>
          <tr><td>Complete homework</td><td className="done">Done</td></tr>
          <tr><td>Call a friend</td><td className="pending">Pending</td></tr>
          <tr><td>Read a book</td><td className="done">Done</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Student;
