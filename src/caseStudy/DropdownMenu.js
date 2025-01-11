import { useState } from 'react';

const DropdownMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      <ul>
        {isOpen && items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

const App = () => {
  const items = ['Profile', 'Settings', 'Logout'];

  return <DropdownMenu items={items} />;
};

export default App;
