const SingleColor = ({ color, setMessage }) => {
  const { weight, hex, type } = color;
  // type === 'shade' && console.log('teste');

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      // console.log('Text copied to clipboard');
      setMessage({ error: '', success: 'Text copied to clipboard' });
    } catch (error) {
      // console.error('Failed to copy text: ', error);
      setMessage({ success: '', error: 'Failed to copy text: ' });
    }
  }

  return (
    <article
      className="color"
      style={{ background: `#${hex}`, color: type === 'shade' && '#fff' }}
      onClick={() => {
        copyToClipboard(`#${hex}`);
      }}
    >
      <p className="color-text">{weight}%</p>
      <p className="color-text">#{hex}</p>
    </article>
  );
};

export default SingleColor;
