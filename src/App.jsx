import { useEffect, useState } from 'react';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

import Form from './components/Form';
import ColorList from './components/ColorList';

const App = () => {
  const [colorList, setColorList] = useState(new Values('#f15025').all(20));
  const [message, setMessage] = useState({ error: '', success: '' });

  useEffect(() => {
    // console.log(message.error);
    // console.log(message.success);
    message.error && toast.error(message.error);
    message.success && toast.success(message.success);
  }, [message]);

  return (
    <main>
      <ToastContainer position="top-center" />
      <Form setColorList={setColorList} setMessage={setMessage} />
      <ColorList colorList={colorList} setMessage={setMessage} />
    </main>
  );
};
export default App;
