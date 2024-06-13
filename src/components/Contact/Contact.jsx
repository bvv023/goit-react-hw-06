// src/components/Contact/Contact.jsx
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { AiFillPhone } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";



const Contact = ({ id, name, number, onDelete }) => (
  <li className={css.item}>
    <div className={css.wrapper}>
     <p className={css.name}><BsFillPersonFill />&nbsp;{name}</p>
     <p className={css.number}><AiFillPhone />&nbsp;{ number}</p>
    </div>
    <button onClick={() => onDelete(id)} className={css.button}>Delete</button>
  </li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
