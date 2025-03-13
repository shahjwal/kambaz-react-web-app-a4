import { Routes, Route, Navigate } from "react-router";
import Account from "./Account/Index";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KambazNavigation from "./Navigation";
import "./style.css"
import * as db from "./Database";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
export default function Kambaz() {
  const [courses] = useState<any[]>(db.courses);

  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={ <ProtectedRoute>
            <Dashboard
      
            />
            </ProtectedRoute>
            } />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/> </ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>   
    </div>
);}
