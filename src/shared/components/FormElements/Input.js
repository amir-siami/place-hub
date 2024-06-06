import React, { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";
import "./Input.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };

    default:
      return state;
  }
};

function Input(props) {
  const initialState = {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { id, onInput } = props;
  const { value, isValid } = state;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE",
      val: e.target.value,
      validators: props.validators,
    });
  };

  const handleTouch = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        onBlur={handleTouch}
        value={state.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={handleChange}
        onBlur={handleTouch}
        value={state.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !state.isValid && state.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!state.isValid && state.isTouched && <p>{props.errorText}</p>}
    </div>
  );
}

export default Input;
