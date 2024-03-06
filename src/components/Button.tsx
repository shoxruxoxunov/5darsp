type BtnPropsObj = {
  text: string;
  type: string;
  status: boolean;
};

function Button({ text, status, type }: BtnPropsObj) {
  if (status) {
    return <button className={`create__button ${type}`}>Loading...</button>;
  }
  return <button className={`create__button ${type}`}>{text}</button>;
}

export default Button;
