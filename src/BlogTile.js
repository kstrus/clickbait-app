import React from 'react';

const border = '1px solid #ccc';

const tileStyles = {
    padding: 20,
    marginBottom: 30,
    border: border,
    borderRadius: 10,
    cursor: 'pointer'
};

const headerStyles = {
    margin: 0,
    paddingBottom: 15,
    borderBottom: border
};

function BlogTile({ title, intro }) {
    return (
        <div style={tileStyles}>
            <h2 style={headerStyles}>{title}</h2>
            <p>{intro.length > 25 ? `${intro.slice(0, 25)}...` : intro}</p>
        </div>
    )
}

export default BlogTile;
