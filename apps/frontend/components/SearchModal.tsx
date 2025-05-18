import React, { useState } from 'react';

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen} className="btn btn-primary">
        Open Search
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchModal;
