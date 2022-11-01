const AtomButton = (props) => {
  return (
    <a type="button" className={props.className} href={props.href}>
      {props.content}
    </a>
  );
};

export default AtomButton;
