import React from "react";
import { students } from "../../data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcFeedback, FcKindle } from "react-icons/fc";
import { AiOutlineRollback } from "react-icons/ai";
import SnackIcon from "../../images/cashew.png";
import GradeIcon from "../../images/grades.png";

const Profile = () => {
  const { id } = useParams();
  const student = students.find((student) => student.id === Number(id));

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div className="profile">
      <button>
        <Link to="/">
          <AiOutlineRollback />
        </Link>
      </button>
      <img className="profile-image" src={student.image} alt={student.alt} />
      <h3 className="student-name">
        {student.name} <span>{student.emoji}</span>
      </h3>
      <div className="details">
        <div>
          <span>
            <FcFeedback />
          </span>
          <a href={`mailto:${student.email}`}>{student.email}</a>
        </div>
        <div>
          <span>
            <FcKindle />
          </span>
          {student.title}
        </div>
        <div>
          <span>
            <img src={SnackIcon} style={{ width: "1.5rem" }} alt="" />
          </span>
          {student.snack}
        </div>
        <div>
          <span>
            <img src={GradeIcon} style={{ width: "1.5rem" }} alt="" />
          </span>
          {student.grade}
        </div>
      </div>
    </div>
  );
};

export default Profile;
