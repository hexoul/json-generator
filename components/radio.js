import { createContext, useContext } from "react";

export const RadioContext = createContext({});

export function RadioGroup({ label, children, ...rest }) {
  return (
    <fieldset>
      <legend>{label}</legend>
      <RadioContext.Provider value={{ [label]: { ...rest } }}>
        {children}
      </RadioContext.Provider>
    </fieldset>
  );
}

export function Radio({ label, children, value, name, defaultChecked, disabled }) {
  const group = useContext(RadioContext);

  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled || group.disabled}
        checked={group[label].value !== undefined ? value === group[label].value : undefined}
        onChange={(e) => group[label].onChange && group[label].onChange(e.target.value)}
      />
      {children}
    </label>
  );
}
