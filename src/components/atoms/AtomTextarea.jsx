const AtomTextarea = (props) => {
  return (
    <div className={props.className}>
      <label className="text-[13px] md:text-sm">{props.label}:</label>
      <hr className="my-5 " />
      <textarea
        className="block w-full text-[13px] md:text-sm"
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default AtomTextarea;
