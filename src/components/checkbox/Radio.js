import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ checked, children, control, name, ...rest }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <label>
      <div>
        <input
          onChange={() => {}}
          type="radio"
          className="hidden-input"
          checked={checked}
          {...field}
          {...rest}
        />
        <div className="flex items-center gap-x-3 font-medium cursor-pointer">
          <div
            className={`w-7 h-7 rounded-full ${
              checked ? "bg-primary" : "bg-gray-500"
            }`}
          ></div>
          <span>{children}</span>
        </div>
      </div>
    </label>
  );
};
export default Radio;
