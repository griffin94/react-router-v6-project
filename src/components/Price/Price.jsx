const Price = ({ children }) => (
  <div>
    <span className='fs-4 fw-bold'>${children}</span>
    /day
  </div>
);

export default Price;
