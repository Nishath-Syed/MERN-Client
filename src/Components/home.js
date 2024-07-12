import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleButton = () => {
    if (name.trim() !== "") {
      setNames([...names, name]);
      setName("");
    }
  };

  const handleDelete = (index) => {
    const updatedNames = names.filter((_, i) => i !== index);
    setNames(updatedNames);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={handleChange}
        className="border border-blue-500 p-1" // Changed border color to blue
      />
      <button
        id="submit"
        className="bg-blue-500 text-white border border-blue-500 w-20 p-1 ml-1" // Changed button colors to blue
        onClick={handleButton}
      >
        Click
      </button>
      <table className="mt-4 border-collapse border border-blue-500"> {/* Changed table border color to blue */}
        <thead>
          <tr>
            <th className="border border-blue-500 p-2">Serial Number</th> {/* Changed table header border color to blue */}
            <th className="border border-blue-500 p-2">Name</th> {/* Changed table header border color to blue */}
            <th className="border border-blue-500 p-2">Action</th> {/* Changed table header border color to blue */}
          </tr>
        </thead>
        <tbody>
          {names.map((name, index) => (
            <tr key={index}>
              <td className="border border-blue-500 p-2">{index + 1}</td> {/* Changed table cell border color to blue */}
              <td className="border border-blue-500 p-2">{name}</td> {/* Changed table cell border color to blue */}
              <td className="border border-blue-500 p-2">
                <button
                  className="bg-blue-500 text-white p-1" // Changed button color to blue
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
