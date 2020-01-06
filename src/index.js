import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./index.css";

const DynamicTextField = ({ value = "", placeholder = "", styles = {} }) => {
  const [textFieldValue, setTextFieldValue] = useState(value);

  const [titleWidth, setTitleWidth] = useState("");

  const titleSpanRef = useRef(null);

  const titleInputRef = useRef(null);

  useEffect(() => {
    setTitleWidth(`${titleSpanRef.current.offsetWidth - 30}px`);
  }, [textFieldValue]);

  return (
    <>
      <input
        type="text"
        className="textfield textfield-input"
        ref={titleInputRef}
        value={textFieldValue}
        autoComplete="off"
        spellCheck={false}
        placeholder={placeholder}
        onChange={e => setTextFieldValue(e.currentTarget.value)}
        style={{
          ...styles,
          width: titleWidth
        }}
      />

      <span className="textfield textfield-span" ref={titleSpanRef}>
        {textFieldValue === "" ? placeholder : textFieldValue}
      </span>
    </>
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
