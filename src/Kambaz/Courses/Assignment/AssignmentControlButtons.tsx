import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";

export default function AssignmentControlButtons(
  { assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void;}
) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid } = useParams();
  const navigate = useNavigate();
  const isAdminOrFaculty = currentUser.role === "FACULTY" || currentUser.role === "ADMIN";
  const handleEditAssignment = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/${assignmentId}`);
  };
  const handleDeleteAssignment = (assignmentId: string) => {
    if (window.confirm('Are you sure you want to delete this assignment?')) {
      deleteAssignment(assignmentId);
    }
  };

  return (
    <div className="float-end d-flex align-items-center gap-2">
      {isAdminOrFaculty && (
        <>
          <FaPencil onClick={() => handleEditAssignment()} className="text-primary me-3" />
          <FaTrash className="text-danger me-2 mb-1" onClick={() => handleDeleteAssignment(assignmentId)} />
        </>
      )}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <BsPlus className="fs-4" />
    </div>
  );
} 