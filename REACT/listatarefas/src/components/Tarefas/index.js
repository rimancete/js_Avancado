import React from 'react';
// Tarefas
import PropTypes from 'prop-types';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas({ tarefas = '', handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="editTask" />
            <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delTask" />
          </span>
        </li>
      ))}
    </ul>

  );
}
Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
};
