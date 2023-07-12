import { useState } from 'react';
import Values from 'values.js';

const Form = ({ setColorList, setMessage }) => {
  const [color, setColor] = useState('#f15025');

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      setColorList(new Values(color).all(10));
    } catch (error) {
      // console.log(error.message);
      setMessage({ success: '', error: error.message });
    }
  };

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">color generator</label>
        <input type="color" onChange={handleChange} value={color} />
        <input type="text" onChange={handleChange} value={color} />
        <button type="submit">submit</button>
      </form>
    </section>
  );
};

export default Form;
