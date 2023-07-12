import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';

const ColorList = ({ colorList, setMessage }) => {
  return (
    <section>
      {colorList.map((color) => {
        return (
          <SingleColor key={nanoid()} color={color} setMessage={setMessage} />
        );
      })}
    </section>
  );
};

export default ColorList;
