import { courses } from "../Database";
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";

export default function CourseNavigation() { 
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  const links = [
    { label: "Home", path: `/Kambaz/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kambaz/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kambaz/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kambaz/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kambaz/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kambaz/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kambaz/Courses/${cid}/Grades` },
    { label: "People", path: `/Kambaz/Courses/${cid}/People` },
    { label: "Settings", path: `/Kambaz/Courses/${cid}/Settings` }
  ];

  return ( 
    <div>
      {!course && <p className="text-danger">Course not found!</p>}
      <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0"> 
        {links.map((link) => (
          <ListGroup.Item 
            key={link.path} 
            as={Link} 
            to={link.path} 
            className={`list-group-item border border-0 
              ${pathname.includes(link.label) ? "active border border-0" : "text-danger border border-0"}`}
          >
            {link.label}
          </ListGroup.Item>
        ))}
      </ListGroup> 
    </div>
  ); 
}