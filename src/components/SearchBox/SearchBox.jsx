// src/components/SearchBox/SearchBox.jsx
import PropTypes from 'prop-types';
import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => (
  <div className={css.searchBox}>
    <label className={css.label} htmlFor="search">Find contacts by name</label>
    <input
      className={css.input}
      type="text"
      id="search"
      value={value}
      onChange={onChange}
    />
  </div>
);

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
