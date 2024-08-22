import React from 'react';
import Header from '../../../components/Header';
import UserTable from './UserTable';

export default function User() {
    return (
        <>
            <Header text="Пользователи" />
            <UserTable/>
        </>
    )
}
