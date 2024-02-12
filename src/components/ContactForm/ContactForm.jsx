import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string()
    .min(10, 'Number is too short!')
    .max(15, 'Number is too long!')
    .required('Required'),
});

const initialValues = {
  username: '',
  number: '',
};
export const ContactForm = ({ onAdd }) => {
  const textId = useId();
  const numberId = useId();
  const hendleSubmit = (evt, values, actions) => {
    console.log(values);
    onAdd(evt.target.elements.username.value);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={hendleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <label htmlFor={textId}>Name</label>
        <Field type="text" name="username" id={textId} />
        <ErrorMessage className={css.error} name="username" as="span" />

        <label htmlFor={numberId}>Number</label>
        <Field type="number" name="number" id={numberId} />
        <ErrorMessage className={css.error} name="number" as="span" />

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
