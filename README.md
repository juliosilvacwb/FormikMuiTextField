# FormikMuiTextField
HTML Input using Formik and TextField of Material UI

#### Example
```js
import { useFormik } from 'formik';

function App() {

  const formik = useFormik({
      initialValues: {email: ''},
      enableReinitialize: true,
      onSubmit: (values, formikHelpers) => {
          formikHelpers.resetForm();
      },
  });

  return <FormikMuiTextField 
            id="email" 
            name="email" 
            label="Email" 
            formik={formik}
        />
}

export default App;
```