import React from 'react'
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu';
import { Home, Skill, Posts } from './pages';

export default function AppStart() {
    return (
        <BrowserRouter>
            <Wrapper>
                <Menu />
                <Route exact path="/" component={Home} />
                <Switch>
                    <Route path="/about/:name" component={Skill} />
                    <Route path="/about" component={Skill} />
                </Switch>
                <Route path="/posts" component={Posts} />
            </Wrapper>
        </BrowserRouter>
    )
}

const Wrapper = styled.div`
    height: 100vh;
`;