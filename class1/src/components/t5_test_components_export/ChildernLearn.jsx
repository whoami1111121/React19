const ChildernLearn = ({ title, children, role }) => {

    
  return (
    <div>
      <p>{title} this is before childern</p>
      {children}

      <p>this is after childern</p>
    </div>
  );
};

export default ChildernLearn;
