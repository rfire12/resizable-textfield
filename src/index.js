import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const DynamicTextField = ({
  value = "",
  placeholder = "",
  styles = {},
  onChange = () => {},
  ...rest
}) => {
  // Styles
  const txtStyles = {
    textfield: {
      border: "2px solid rgb(9, 123, 199)",
      borderRadius: "3px",
      color: "white",
      display: "inline-block",
      fontFamily: "sans-serif",
      fontSize: "1.2em",
      fontWeight: "bolder",
      margin: "0",
      outline: "none",
      padding: "5px 15px",
      position: "absolute",
      transform: "translate(0%, 0%)",
      whiteSpace: "pre-wrap"
    },
    textfieldSpan: { border: "0", visibility: "hidden" },
    textfieldInput: { color: "black", padding: "3px 15px" }
  };

  const [textFieldValue, setTextFieldValue] = useState(value);

  const [titleWidth, setTitleWidth] = useState("");

  const titleSpanRef = useRef(null);

  const titleInputRef = useRef(null);

  useEffect(() => {
    setTitleWidth(`${titleSpanRef.current.offsetWidth - 29}px`);
  }, [textFieldValue]);

  return (
    <div>
      <input
        type="text"
        ref={titleInputRef}
        value={textFieldValue}
        autoComplete="off"
        spellCheck={false}
        placeholder={placeholder}
        onChange={e => {
          setTextFieldValue(e.currentTarget.value);
          onChange(e);
        }}
        style={{
          ...txtStyles.textfield,
          ...txtStyles.textfieldInput,
          ...styles,
          width: titleWidth
        }}
        {...rest}
      />

      <span
        ref={titleSpanRef}
        style={{
          ...txtStyles.textfield,
          ...txtStyles.textfieldSpan
        }}
      >
        {textFieldValue === "" ? placeholder : textFieldValue}
      </span>
    </div>
  );
};

DynamicTextField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  atLeatOneRequired: props => {
    if (props.value === undefined && props.placeholder === undefined) {
      return new Error("At least 'value' or 'placeholder' must be provided");
    }
  }
};

export default DynamicTextField;
