import React from 'react';

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarBtnLink, SidebarBtnRoute, SidebarRouteLink } from './SidebarElements';

const Sidebar = ({toggle, isOpen, isHomePage=false}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {isHomePage ?
                        <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    :
                        <SidebarRouteLink to="/" >About</SidebarRouteLink>
                    }
                    {isHomePage ?
                        <SidebarLink to="crypto" onClick={toggle}>Crypto</SidebarLink>
                    :
                        <SidebarRouteLink to="/" >Crypto</SidebarRouteLink>
                    }
                    {isHomePage ?
                        <SidebarLink to="knowhow" onClick={toggle}>KnowHow</SidebarLink>
                    :
                        <SidebarRouteLink to="/" >KnowHow</SidebarRouteLink>
                    }
                    {isHomePage ?
                        <SidebarLink to="more" onClick={toggle}>More</SidebarLink>
                    :
                        <SidebarRouteLink to="/" >More</SidebarRouteLink>
                    }

                    <SidebarRouteLink to="/stock" >Stock</SidebarRouteLink>
                    
                </SidebarMenu>
                    <SideBtnWrap>
                        {isHomePage ?
                            <SidebarBtnLink to="hireme" onClick={toggle}>Hire me</SidebarBtnLink>
                        :
                            <SidebarBtnRoute to="/">Hire me</SidebarBtnRoute>
                        }
                        
                    </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
