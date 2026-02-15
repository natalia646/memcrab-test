import type { FC, InputHTMLAttributes } from "react";

type InputProps = { label: string } & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
>;

export const Input: FC<InputProps> = ({ label, ...props }) => (
  <label>
    {label}
    <input min={0} max={100} className="input" {...props} />
  </label>
);
