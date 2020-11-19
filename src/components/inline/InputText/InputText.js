import PropTypes from "prop-types";
import React from "react";

import s from "./InputText.module.css";

/*
 * For responsive behavior, the width of the parent element
 * of this component should be set in a class and should
 * follow this example:
 *
 * In your js file:
 * <span className="my-wrapper"><InputText></span>
 *
 * In your css file:
 * .my-wrapper {
 *   width: 400px;
 *  }
 *
 *  @media (max-width: 720px) {
 *    .my-wrapper {
 *      width: 200px;
 *    }
 *  }
 *
 */

const InputText = ({ placeholderText, onChange, value, type }) => {
  return (
    <input
      className={s.inputText}
      type={type}
      placeholder={placeholderText}
      onChange={onChange}
      value={value}
    />
  );
};

InputText.propTypes = {
  placeholderText: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
};

InputText.defaultProps = {
  placeholderText: undefined,
  onChange: undefined,
  value: undefined,
};

export default InputText;