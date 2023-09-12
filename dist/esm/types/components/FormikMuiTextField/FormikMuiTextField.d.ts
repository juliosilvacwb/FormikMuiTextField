import PropTypes from 'prop-types';
import React from "react";
declare function FormikMuiTextField({ ...props }: {
    [x: string]: any;
}): React.JSX.Element;
declare namespace FormikMuiTextField {
    var defaultProps: {
        type: string;
        variant: string;
    };
    var propTypes: {
        id: PropTypes.Requireable<string>;
        name: PropTypes.Requireable<string>;
        label: PropTypes.Validator<string>;
        type: PropTypes.Requireable<string>;
        formik: PropTypes.Validator<any>;
    };
}
export default FormikMuiTextField;
