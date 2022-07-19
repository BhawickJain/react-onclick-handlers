function TestButton(): JSX.Element {
  const handleClick = () => {
    window.alert("This is a nasty nasty cookie message")
  }
  return <button onClick={handleClick}>Make me do something when I'm clicked...</button>;
}

export default TestButton;
