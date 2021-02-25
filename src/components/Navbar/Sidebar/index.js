import React from 'react';

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({toggle, isOpen, isHomePage}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to={isHomePage ? "about" : "/"} onClick={toggle}>About</SidebarLink>
                    <SidebarLink to={isHomePage ? "crypto" : "/"} onClick={toggle}>Crypto</SidebarLink>
                    <SidebarLink to={isHomePage ? "knowhow" : "/"} onClick={toggle}>KnowHow</SidebarLink>
                    <SidebarLink to={isHomePage ? "more" : "/"} onClick={toggle}>More</SidebarLink>
                    <SidebarLink to={isHomePage ? "stock" : "/"} onClick={toggle}>Stock</SidebarLink>
                </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to={isHomePage ? "hire" : "/"} onClick={toggle}>Hire me</SidebarRoute>
                    </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
