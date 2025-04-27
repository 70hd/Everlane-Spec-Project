const Input = ({
  type = "text",
  id,
  name,
  value,
  onChange,
  placeholder,
  version = "input",
  error,
  red,
  label
}) => {
  const errorId = `${name}-error`;
  console.log(version)
  const commonProps = {
    id,
    name,
    value: value ?? "",
    onChange,
    placeholder,
    className: `border ${red ? "border-red-500/50" : "border-black/50"} text-black rounded-none p-3 w-full items-start justify-start ${
      version.toLowerCase() === "message" ? "h-[155px]" : ""
    }`,
    "aria-invalid": !!error,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <section className="flex flex-col gap-3 w-full">
      {label && <label className="w-full" htmlFor={id}>{label}</label>}
      {error && <p id={`${id}-error`} className="w-full text-red-500">{error}</p>}
      {version.toLowerCase() === "message" ? (
        <textarea {...commonProps} />
      ) : (
        <input
          type={type.toLocaleLowerCase() === "password" ? "password" : type}
          {...commonProps}
        />
      )}
    </section>
  );
};

export default Input;