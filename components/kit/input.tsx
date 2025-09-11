import { classNames } from "@/utils/classname";


interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  errors?: string;
}

export const InputKit: React.FC<IInputProps> = ({
  label,
  errors,
  className = "w-full border shadow-md rounded-lg border-gray-300 focus:outline-none focus:border-black",
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
        className={classNames(className, !errors ? "" : "!border-red-500", "px-3 py-1")}
        {...props}
      />
      <p
        className={classNames(
          !errors ? "hidden" : "block",
          "text-xs font-medium text-red-500"
        )}
      >
        {errors}
      </p>
    </div>
  );
};
