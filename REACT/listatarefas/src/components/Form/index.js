import React from 'react';
// Form
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './Form.css';

export default function Form({ handlechange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handlechange}
        type="text"
        className="task"
        value={novaTarefa}
      />
      <button type="submit" className="addTask">
        <FaPlus />
      </button>
    </form>

  );
}

Form.propTypes = {
  handlechange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
