import React from 'react';
import {Button, Container, Menu} from "semantic-ui-react";

const NavBar = () => {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img alt={'Logo'} src={'/assets/logo.png'} style={{ marginRight: 10 }} />
                    Reactivities
                </Menu.Item>
                
                <Menu.Item name={'Activities'} />
                
                <Menu.Item>
                    <Button positive content={'Create Activity'} />
                </Menu.Item>
            </Container>
        </Menu>
    );
}

export default NavBar;