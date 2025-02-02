function When({ condition, children }) {
  return condition ? children : null;
}

export default When;
