import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import BanCheckmark from "./BanCheckmark";
import ModuleEditor from "./ModuleEditor";
import { useState } from "react";
import ProtectedRoute from "../../ProtectedRoutes";
export default function ModulesControls(
    { moduleName, setModuleName, addModule }:
        { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <div className="wd-modules-controls-offset p-3">
                <ProtectedRoute>
                    <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn" onClick={handleShow} >
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Module
                    </Button>
                </ProtectedRoute>
                <Dropdown className="float-end me-2">
                    <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
                        <GreenCheckmark /> Publish All
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item id="wd-publish-all">
                            <GreenCheckmark /> Publish All
                        </Dropdown.Item>
                        <Dropdown.Item id="wd-publish-all-modules-and-items">
                            <GreenCheckmark /> Publish all modules and items
                        </Dropdown.Item>
                        <Dropdown.Item id="wd-publish-modules-only">
                            <GreenCheckmark /> Publish modules only
                        </Dropdown.Item>
                        <Dropdown.Item id="wd-unpublish-all-modules-and-items">
                            <BanCheckmark /> Unpublish all modules and items
                        </Dropdown.Item>
                        <Dropdown.Item id="wd-unpublish-modules-only">
                            <BanCheckmark /> Unpublish modules only
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-view-progress">
                    View Progress
                </Button>
                <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-collapse-all">
                    Collapse All
                </Button>
                <ModuleEditor show={show} handleClose={handleClose} dialogTitle="Add Module"
                    moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />
            </div>
        </div>
    );
}
