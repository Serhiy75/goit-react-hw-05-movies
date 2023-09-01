export const SearchMovie = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const { value } = evt.target.elements.query;
    onSubmit(value);
    // console.log(value);
    evt.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" required />
      <button type="submit">Search Movie</button>
    </form>
  );
};
