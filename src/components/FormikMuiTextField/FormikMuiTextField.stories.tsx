import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FormikMuiTextField from "./FormikMuiTextField";
import { useFormik } from 'formik';

const meta: Meta<typeof FormikMuiTextField> = {
  component: FormikMuiTextField,
  title: "Julius/FormikMuiTextField",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof FormikMuiTextField>;

export const Primary: Story = (args) => {
  const formik = useFormik({
      initialValues: {email: ''},
      enableReinitialize: true,
      onSubmit: (values, formikHelpers) => {
          formikHelpers.resetForm();
      },
  });
  return <FormikMuiTextField data-testId="InputField-id" {...args} formik={formik}/>
}

Primary.args = {
    id: "email",
    name: "email", 
    label: "E-mail" 
};

// export const Secondary: Story = (args) => (
//   <FormikMuiTextField data-testId="InputField-id" {...args} />
// );
// Secondary.args = {
//   primary: false,
//   disabled: false,
//   text: "Secondary",
// };

// export const Disabled: Story = (args) => (
//   <FormikMuiTextField data-testId="InputField-id" {...args} />
// );
// Disabled.args = {
//   primary: false,
//   disabled: true,
//   text: "Disabled",
// };

// export const Small: Story = (args) => (
//   <FormikMuiTextField data-testId="InputField-id" {...args} />
// );
// Small.args = {
//   primary: true,
//   disabled: false,
//   size: "small",
//   text: "Small",
// };

// export const Medium: Story = (args) => (
//   <FormikMuiTextField data-testId="InputField-id" {...args} />
// );
// Medium.args = {
//   primary: true,
//   disabled: false,
//   size: "medium",
//   text: "Medium",
// };

// export const Large: Story = (args) => (
//   <FormikMuiTextField data-testId="InputField-id" {...args} />
// );
// Large.args = {
//   primary: true,
//   disabled: false,
//   size: "large",
//   text: "Large",
// };