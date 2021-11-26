import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MyTextInput, MySelect } from '../components';
import '../styles/styles.css';

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('El email no tiene un formato válido')
            .required('Requerido'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
            .required('Requerido')
            .notOneOf(['it-jr'], 'Esta opción no es permitida'),
        })}>
        {(formik) => (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='Misael'
            />
            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='Peloc'
            />
            <MyTextInput
              label='Email Address'
              name='email'
              placeholder='pmpeloc@gmail.com'
              type='email'
            />
            <MySelect label='Job Type' name='jobType'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Junior</option>
            </MySelect>
            <MyCheckbox label='Terms and Conditions' name='terms' />
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
