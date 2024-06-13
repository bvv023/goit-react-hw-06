// src/components/SearchBox/SearchBox.jsx
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label className={css.label} htmlFor="search">Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        id="search"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBox;
