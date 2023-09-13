# FormikMuiTextField
HTML Input using Formik, React Text Mask and TextField of Material UI

#### Example
```js
import { useFormik } from 'formik';
import { BR_CPF_MASK, BR_MOBILE_MASK} from "formik-mui-textfield/FormikMuiMaskedTextField";

function App() {

  const formik = useFormik({
      initialValues: {email: '', mobile: '', phone: ''},
      onSubmit: (values, formikHelpers) => {
          formikHelpers.resetForm();
      },
  });

  const mobileMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  return    <>
                <FormikMuiTextField 
                    id="email" 
                    name="email" 
                    label="Email" 
                    formik={formik}
                />

                <FormikMuiMaskedTextField 
                    mask={mobileMask} 
                    id="mobile" 
                    label="Mobile" 
                    name="mobile" 
                    formik={formik}
                />
                
                <FormikMuiMaskedTextField 
                    mask={BR_CPF_MASK} 
                    id="cpf" 
                    label="CPF" 
                    name="cpf" 
                    formik={formik}
                />

                <FormikMuiMaskedTextField 
                    id="phone" 
                    label="Phone" 
                    name="phone"
                    formik={formik}
                    alternativeMask={BR_MOBILE_MASK}
                    testAlternativeMask={TEST_BR_MOBILE_MASK}
                />
            </>
}

export default App;
```

* The name property in component should be the same name in initialValues.

* Available consts: 
    ```
    BR_PHONE_MASK           ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    BR_MOBILE_MASK          ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    BR_CEP_MASK             [/[\d]/, /\d/,'.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    BR_CNPJ_MASK            [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    BR_CPF_MASK             [/\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'-', /\d/, /\d/];
    TEST_BR_MOBILE_MASK     (value: string) => value.replace(/\D/g, '')[2] === '9'
    ```
