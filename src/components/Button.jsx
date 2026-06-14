export const Button = ({ children, ...props }) => {
  return (
    <button className="btn-toggle" {...props}>
      {children}
    </button>
  );
};
