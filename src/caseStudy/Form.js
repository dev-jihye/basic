import { useState } from 'react';

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    const error = validate({ [name]: value });
    setErrors({ ...errors, [name]: error[name] });
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
  };

  return { values, errors, handleChange, handleSubmit };
};

const Form = ({ onSubmit }) => {
  const initialValues = { username: '', email: '' };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validate
  );

  return (
    <form onSubmit={handleSubmit(() => onSubmit(values))}>
      <div>
        <label>Username</label>
        <input
          name="username"
          value={values?.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label name="email">Email</label>
        <input name="email" value={values?.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const App = () => {
  const handleSubmit = (values) => {
    console.log('Form Submitted:', values);
  };

  return (
    <div>
      <h1>Reusable Form</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
