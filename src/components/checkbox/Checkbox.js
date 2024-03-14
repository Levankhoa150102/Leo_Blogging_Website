import React from "react";
import { useController } from "react-hook-form";

const Checkbox = ({ checked, children, control, name, ...rest }) => {
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
          type="checkbox"
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
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span>{children}</span>
        </div>
      </div>
    </label>
  );
};
export default Checkbox;
