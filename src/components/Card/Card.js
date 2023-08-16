import { twMerge } from "tailwind-merge";

const Card = ({ children, header, className }) => {
  return (
    <div className="divide-y divide-gray-200  rounded-lg bg-white shadow">
      {header && (
        <h1 className="px-4 py-5 text-lg font-bold sm:px-6">{header}</h1>
      )}
      <div className={twMerge("px-4 py-5 sm:p-6", className)}>{children}</div>
    </div>
  );
};
export default Card;
