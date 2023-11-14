import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? 'Close menu' : 'Open menu'}
      </button>

      {isOpen && (
        <ul class="z-30">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;

