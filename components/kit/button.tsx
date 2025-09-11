import { classNames } from "@/utils/classname";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  content: string;
}

export const ButtonKit: React.FC<IButtonProps> = ({
  className = "p-3",
  content,
  ...props
}) => {
  return (
    <button
      className={classNames(
        className,
        "hover:scale-105 active:translate-y-1 active:transition duration-200 shadow-md rounded-lg p-1"
      )}
      {...props}
    >
      {content}
    </button>
  );
};
