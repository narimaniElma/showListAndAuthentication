import * as yup from 'yup';

const schemaValidations = yup.object({
    username: yup.string().required('Username is required.'),
    email: yup.string().required('Email is required.').email('Email is invalid'),
    password: yup.string().required('Password is required.').min(5, 'Password should be at least 5 characters'),
    password_confirm: yup.string()
      .required('Confirmation password is required.')
      .oneOf([yup.ref('password'), null], 'Must be equal to Password.'),
  code: yup.string().required("Code is required."),
  });

export default schemaValidations;
