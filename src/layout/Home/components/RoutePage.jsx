import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from "../../../config/routes";
import UsersPage from '../../../modules/Users/UsersPage';

export default function RoutePage() {
    return (
        <div className="routes">
            <Routes>
                <Route path="/*" element={<UsersPage />} />
                {routes.map(route => (
                    <Route key={route.id} path={route.path} element={route.element} />
                ))}
            </Routes>
        </div>
    )
}