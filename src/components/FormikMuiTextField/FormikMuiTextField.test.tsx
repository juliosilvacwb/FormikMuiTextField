import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {render, screen, waitFor } from '@testing-library/react';

import FormikMuiTextField from "./FormikMuiTextField";

describe("Running Test for FormikMuiTextField", () => {

  const formik = {values: {hello: ''}, touched: {hello: ''}, errors: {}, handleChange: () => {}, handleOnBlur: () => {}};

  test("Check placeholder in Input", () => {
    render(<FormikMuiTextField placeholder="Hello julius" id="hello" label="hello" name="hello"  formik={formik}/>)
    expect(screen.getByPlaceholderText('Hello julius')).toHaveAttribute('placeholder', 'Hello julius');
  });
});