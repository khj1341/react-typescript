import React from 'react';
import queryString from 'query-string';

export default function SkillScreen({match, location}: any) {
    const query = queryString.parse(location.search);
    console.log('query: ', query);

    const detail = query.detail === 'aaa';
    
    return (
        <div>
            <h2>222</h2>
            <h1>params {match.params.name}</h1>
            <h1>result: {detail && 'true!!!'}</h1>
        </div>
    )
}
