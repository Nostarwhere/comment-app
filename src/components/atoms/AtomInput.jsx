const AtomInput = (props) => {
  return (
    <div className={props.className}>
      <span>
        <img src={props.src} alt="" />
        <label className={props.classLabel}>{props.label}</label>
      </span>

      <input
        className={props.classInput}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default AtomInput;
