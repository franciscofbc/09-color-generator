import { useState } from 'react';
import Values from 'values.js';

const Form = ({ setColorList, setMessage }) => {
  const [color, setColor] = useState('');

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
        <div className="form-container">
          <input
            type="color"
            className="input-color"
            onChange={handleChange}
            value={color}
          />
          <input
            type="text"
            className="input-text"
            onChange={handleChange}
            placeholder="#f15025"
            value={color}
          />
          <button type="submit" className="btn" style={{ background: color }}>
            submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
