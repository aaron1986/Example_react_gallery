import React, { useState } from "react";

export default function Header({ handleSearch }) {
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleSearchChange = (event) => {
      setSearchKeyword(event.target.value);
    };

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li>
            <input
              type="text"
              placeholder="Search..."
              value={searchKeyword}
              onChange={handleSearchChange}
            />
          </li>
          <li>
            <button className="btn" onClick={() => handleSearch(searchKeyword)}>
              Search
            </button>
          </li>
                    </ul>
                </nav>
            </header>
        </div>

    );
}