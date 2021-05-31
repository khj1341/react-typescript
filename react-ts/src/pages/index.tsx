import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
    return <div>로딩중...</div>;
};

export const Home = Loadable({
    loader: () => import('./HomeScreen'),
    loading: Loading
});

export const Skill = Loadable({
    loader: () => import('./SkillScreen'),
    loading: Loading
});
  
export const Post = Loadable({
    loader: () => import('./PostScreen/Post'),
    loading: Loading
});

export const Posts = Loadable({
    loader: () => import('./PostScreen/Posts'),
    loading: Loading
});

export const Counter = Loadable({
    loader: () => import('./CounterScreen'),
    loading: Loading
});

export const ReducerSample = Loadable({
    loader: () => import('./ReducerSample'),
    loading: Loading
});

// export const Home = withSplitting(() => import('../pages/HomeScreen'));
// export const Skill = withSplitting(() => import('../pages/SkillScreen'));
// export const Post = withSplitting(() => import('../pages/PostScreen/Post'));
// export const Posts = withSplitting(() => import('../pages/PostScreen/Posts'));