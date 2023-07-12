const SingleColor = ({ color, setMessage }) => {
  const { weight, hex } = color;

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
      style={{ background: `#${hex}` }}
      onClick={() => {
        copyToClipboard(`#${hex}`);
      }}
    >
      <p>{weight}%</p>
      <p>#{hex}</p>
    </article>
  );
};

export default SingleColor;
