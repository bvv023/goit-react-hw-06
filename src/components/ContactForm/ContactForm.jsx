// src/components/ContactForm/ContactForm.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .matches(/^[\d()+-]*$/, 'Invalid phone number format')
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">Name</label>
        <Field className={css.input} id="name" name="name" />
        <ErrorMessage className={css.error} name="name" component="div" />
        
        <label className={css.label} htmlFor="number">Number</label>
        <Field className={css.input} id="number" name="number" />
        <ErrorMessage className={css.error} name="number" component="div" />
        
        <button type="submit" className={css.button}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
