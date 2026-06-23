const Dropdown = ({ setColor }) => {
  return (
    <div>
      <label>
        Pick a fruit:
        <select
          onChange={(event) => setColor(event.target.value)}
          name="selectedFruit"
          defaultValue="orange"
        >
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="orange">orange</option>
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
