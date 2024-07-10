import { HTMLAttributes, useContext } from "react";
import { RadioGroupContext } from "../../context/RadioContext";
import css from "./Radio.module.scss";
import Label from "./Label";

interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  id: string;
  label: string;
}

const Radio: React.FC<RadioProps> = ({ value, id, label, className }) => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error("Radio must be used within a RadioGroup");
  }
  const { name, selectedValue, onChange } = context;

  return (
    <div className={`${css.wrapper}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
        className={`${css.radio} ${className || ""}`}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};

export default Radio;
