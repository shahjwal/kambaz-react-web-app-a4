
import { useState } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./AssignmentReducer";


export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const assignment = assignments.find(
    (assignment: any) => assignment.course === cid && assignment._id === aid
  );

  const [description, setDescription] = useState(assignment?.description || "");
  const [title, setTitle] = useState(assignment?.title || "");
  const [dueDate, setDueDate] = useState(assignment?.dueDate || "");
  const [points, setPoints] = useState(assignment?.points || "");
  const [availableFrom, setAvailableFrom] = useState(assignment?.availableFrom || "");
  const [availableUntil, setAvailableUntil] = useState(assignment?.availableUntil || "");




  const handleSave= (): void => {
   
    if (!aid) {
      // Add new assignment
      dispatch(addAssignment({
        description,
        title,
        course: cid,
        dueDate,
        points: parseInt(points),
        availableFrom,
        availableUntil,
      }));
    } else {
      // Update existing assignment
      dispatch(updateAssignment({
        _id: aid,
        description,
        title,
        course: cid,
        dueDate,
        points: parseInt(points),
        availableFrom,
        availableUntil,
      }));
    }
  
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <Row>
        <Col sm={10}>
          <Form>
            <Form.Group controlId="wd-name">
              <Form.Label>Assignment Name</Form.Label>
              <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="wd-description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

            <Row className="mt-3">
              <Col sm={6}>
              </Col>
              <Col sm={1} className="float-end pl-5">
                <Form.Label>Points</Form.Label>
              </Col>
              <Col sm={5}>
                <Form.Control type="number" value={points} onChange={(e) => setPoints(e.target.value)} />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col sm={5}></Col>
              <Col sm={2}>
                <Form.Group controlId="wd-group">
                  <Form.Label>Assignment Group</Form.Label>
                </Form.Group>
              </Col>
              
              <Col sm={5}>
                 <Form.Group controlId="wd-group">
                   <Form.Select id="wd-group">
                     <option>Assignment Group</option>
                     <option value="1">ASSIGNMENT</option>
                     <option value="2">None</option>
                   </Form.Select>
                 </Form.Group>
               </Col>
            </Row>

            <Row className="mt-3">
            <Col sm={5}></Col>
              <Col sm={2}>
                <Form.Group controlId="wd-grade">
                  <Form.Label>Display Grade as</Form.Label>
                </Form.Group>
              </Col>
              
              <Col sm={5}>
                <Form.Group controlId="wd-grade">
                <Form.Select id="wd-grade">
                    <option value="1">Percentage</option>
                    <option value="2">Points</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col sm={5}></Col>
              <Col sm={2}>
                <Form.Group controlId="wd-submission">
                  <Form.Label>Submission Type</Form.Label>
                </Form.Group>
              </Col>
              
              <Col sm={5} className="border rounded">
                <Table borderless>
                  <tbody>
                    <tr>
                      <td>
                        <Form.Select id="wd-submission-type">
                          <option>Online</option>
                          <option>Offline</option>
                        </Form.Select>
                        <div style={{ marginTop: "10px" }}>
                          <span style={{ marginRight: "5px" }}><strong>Online Entry Options</strong></span>
                          <br />
                          <Form.Check 
                            id="wd-text-entry"
                            type="checkbox"
                            label="Text Entry"
                            style={{ marginRight: "5px", marginTop:"5px" }}
                          />
                          <Form.Check 
                            id="wd-website-url"
                            type="checkbox"
                            label="Website URL"
                            style={{ marginRight: "5px", marginTop:"5px" }}
                          />
                          <Form.Check 
                            id="wd-media-recordings"
                            type="checkbox"
                            label="Media Recordings"
                            style={{ marginRight: "5px", marginTop:"5px" }}
                          />
                          <Form.Check 
                            id="wd-student-annotation"
                            type="checkbox"
                            label="Student Annotation"
                            style={{ marginRight: "5px", marginTop:"5px" }}
                          />
                          <Form.Check 
                            id="wd-file-upload"
                            type="checkbox"
                            label="File Uploads"
                            style={{ marginRight: "5px", marginTop:"5px" }}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col sm={6}></Col>
              <Col sm={1}>
                <Form.Group controlId="wd-assign-to">
                  <Form.Label>Assign</Form.Label>
                </Form.Group>
              </Col>
              <Col sm={5} className="border rounded">
                <Row>
                  <Col>
                    <Form.Group controlId="wd-assign-to">
                      <Form.Label><strong>Assign to</strong></Form.Label>
                      <div className="d-flex align-items-center border rounded p-2">
                        <div className="d-flex align-items-center border rounded p-2" style={{ whiteSpace: 'nowrap', backgroundColor:"#f0f0f0" }}>
                          <span>Everyone</span>
                          <RxCross1 />
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="wd-due-date">
                      <Form.Label><strong>Due </strong></Form.Label>
                      <Form.Control type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={6}>
                    <Form.Group controlId="wd-available-from">
                      <Form.Label><strong>Available From</strong></Form.Label>
                      <Form.Control type="date" value={availableFrom} onChange={(e) => setAvailableFrom(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="wd-available-until">
                      <Form.Label><strong>Until</strong></Form.Label>
                      <Form.Control type="date" value={availableUntil} onChange={(e) => setAvailableUntil(e.target.value)} />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
            
            <hr />
            <Row className="mt-4">
              <Col className="d-flex justify-content-end">
                <Button variant="secondary" id="wd-button-cancel" className="me-3" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}> 
                  Cancel
                </Button>
                <Button variant="danger" id="wd-button-save" onClick={() => handleSave()}>
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col sm={2}></Col>
      </Row>
    </div>
  );
}
