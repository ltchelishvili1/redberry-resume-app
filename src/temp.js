import React, { useState } from 'react';

const InputForm = () => {
  const [inputs, setInputs] = useState([
    { name: '', surname: '', age: '' }
  ]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { name: '', surname: '', age: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <div key={index}>
          <div>
            <label htmlFor={`name-${index}`}>Name:</label>
            <input
              type="text"
              id={`name-${index}`}
              value={input.name}
              onChange={e =>
                setInputs(
                  inputs.map((input, i) =>
                    index === i
                      ? { ...input, name: e.target.value }
                      : input
                  )
                )
              }
            />
          </div>
          <div>
            <label htmlFor={`surname-${index}`}>Surname:</label>
            <input
              type="text"
              id={`surname-${index}`}
              value={input.surname}
              onChange={e =>
                setInputs(
                  inputs.map((input, i) =>
                    index === i
                      ? { ...input, surname: e.target.value }
                      : input
                  )
                )
              }
            />
          </div>
          <div>
            <label htmlFor={`age-${index}`}>Age:</label>
            <input
              type="number"
              id={`age-${index}`}
              value={input.age}
              onChange={e =>
                setInputs(
                  inputs.map((input, i) =>
                    index === i ? { ...input, age: e.target.value } : input
                  )
                )
              }
            />
          </div>
        </div>
      ))}
      <button type="button" onClick={handleAddInput}>
        Add Input
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
