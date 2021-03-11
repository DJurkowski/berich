import React, { useContext } from 'react';
import { Context } from '../../../utils/Context/Context';

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarBtnLink, SidebarBtnRoute, SidebarRouteLink } from './SidebarElements';

const Sidebar = ({toggle, isOpen, isHomePage=false}) => {

    const [context, setContext] = useContext(Context);
    
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
                        <SidebarRouteLink to="/" onClick={() => setContext('about')}>About</SidebarRouteLink>
                    }
                    {isHomePage ?
                        <SidebarLink to="crypto" onClick={toggle}>Crypto</SidebarLink>
                    :
                        <SidebarRouteLink to="/" onClick={() => setContext('cryto')}>Crypto</SidebarRouteLink>
                    }
                    {isHomePage ?
                        <SidebarLink to="knowhow" onClick={toggle}>KnowHow</SidebarLink>
                    :
                        <SidebarRouteLink to="/" onClick={() => setContext('knowhow')}>KnowHow</SidebarRouteLink>
                    }
                    {isHomePage ?
                        <SidebarLink to="more" onClick={toggle}>More</SidebarLink>
                    :
                        <SidebarRouteLink to="/" onClick={() => setContext('more')}>More</SidebarRouteLink>
                    }

                    <SidebarRouteLink to="/stock" >Stock</SidebarRouteLink>
                    
                </SidebarMenu>
                    <SideBtnWrap>
                        {isHomePage ?
                            <SidebarBtnLink to="hireme" onClick={toggle}>Hire me</SidebarBtnLink>
                        :
                            <SidebarBtnRoute to="/" onClick={() => setContext('hireme')}>Hire me</SidebarBtnRoute>
                        }
                    </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
