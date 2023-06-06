import React, { useState } from "react";
import { students } from "../../data";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = (item) => {
  return (
    <div className="card" key={item.id}>
      <img className="img-avatar" src={item.image} alt={item.alt} />
      <div className="card-text">
        <div className="portada"></div>
        <div className="title-total">
          <div className="title">CODED Student</div>
          <h2>{item.name}</h2>
          <div className="actions">
            <button>
              <a href={`mailto:${item.email}`}>
                <FaEnvelope />
              </a>
            </button>
            <Link to={`/profile/${item.id}`}>
              <button>
                <FaUser />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search for students..."
        value={filter}
        onChange={handleFilterChange}
      />
      <div className="row">{filteredStudents.map(Cards)}</div>
    </div>
  );
};

export default Home;
