import React from 'react';
import BlogTile from './BlogTile';

const posts = [
    { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
    { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
    { id: 3, title: 'Adam Małysz Zgolił wąs', intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'}
];

const wrapperStyles = {
    fontFamily: 'sans-serif',
    maxWidth: 600,
    margin: '60px auto'
};

function App() {
    return (
        <div style={wrapperStyles}>
            {posts.map(item => <BlogTile key={item.id} title={item.title} intro={item.intro} />)}
        </div>
    );
}

export default App;
