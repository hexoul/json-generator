import { createContext, useContext } from "react";

const RadioContext = createContext({});

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
  const { [label]: group } = useContext(RadioContext);

  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled || group.disabled}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
      />
      {children}
    </label>
  );
}
