import { classNames } from "@/utils/classname";

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  errors?: string;
}

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: string;
}

export const Input: React.FC<IInputProps> = ({
  label,
  errors,
  className = "w-full border-b border-gray-300 focus:outline-none focus:border-black",
  ...props
}) => {
  return (
    <div className="space-y-2">
      <label
        className={classNames(
          !label ? "hidden" : "block",
          "text-xs font-medium"
        )}
      >
        {label}
      </label>
      <input
        className={classNames(className, !errors ? "" : "!border-red-500")}
        {...props}
      />
      <p
        className={classNames(
          !errors ? "hidden" : "block",
          "text-xs font-medium text-red-500 mt-1"
        )}
      >
        {errors}
      </p>
    </div>
  );
};
