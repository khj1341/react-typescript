import React from 'react'
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu';
import { Home, Skill, Posts, Counter, ReducerSample, TodoList } from './pages';
import MyFormScreen from './pages/MyFormScreen';

import { TodosContextProvider } from './contexts/TodosContext';

export default function AppStart() {

    const onSubmit = (form: { name: string; description: string }) => {
      console.log(form);
    };


    return (
        <TodosContextProvider>
            <BrowserRouter>
                <Wrapper>
                    <Menu />
                    <Route exact path="/" component={Home} />
                    <Switch>
                        <Route path="/about/:name" component={Skill} />
                        <Route path="/about" component={Skill} />
                    </Switch>
                    <Route path="/posts" component={Posts} />
                    <Route path="/count" component={Counter} />
                    <Route path="/reducer" component={ReducerSample} />
                    <Route path="/todo" component={TodoList} />
                    <MyFormScreen onSubmit={onSubmit} />
                </Wrapper>
            </BrowserRouter>
        </TodosContextProvider>
    )
}

const Wrapper = styled.div`
    height: 100vh;
`;