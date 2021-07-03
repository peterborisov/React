import React from 'react'
import { Header } from 'semantic-ui-react';
const MainHeader = (props) => {
    const { title, type='h1' } = props;
    return <Header as={type}>{title}</Header>
}

export default MainHeader;
