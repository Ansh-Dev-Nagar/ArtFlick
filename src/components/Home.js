import React from 'react';
import './Home.css';

const Home = () => {
  // Mock data for art posts
  const artPosts = [
    { id: 1, title: 'Abstract Painting', artist: 'Jane Doe', imageUrl: 'https://source.unsplash.com/random/300x400/?abstract' },
    { id: 2, title: 'Landscape Photography', artist: 'John Smith', imageUrl: 'https://source.unsplash.com/random/300x500/?landscape' },
    { id: 3, title: 'Digital Art', artist: 'Alex Johnson', imageUrl: 'https://source.unsplash.com/random/300x300/?digital' },
    { id: 4, title: 'Sculpture', artist: 'Maria Garcia', imageUrl: 'https://source.unsplash.com/random/300x450/?sculpture' },
    { id: 5, title: 'Street Art', artist: 'Chris Brown', imageUrl: 'https://source.unsplash.com/random/300x350/?street-art' },
    { id: 6, title: 'Portrait', artist: 'Sarah Wilson', imageUrl: 'https://source.unsplash.com/random/300x400/?portrait' },
    { id: 7, title: 'Watercolor', artist: 'Michael Lee', imageUrl: 'https://source.unsplash.com/random/300x500/?watercolor' },
    { id: 8, title: 'Illustration', artist: 'Emily Chen', imageUrl: 'https://source.unsplash.com/random/300x350/?illustration' },
    { id: 9, title: 'Mixed Media', artist: 'David Kim', imageUrl: 'https://source.unsplash.com/random/300x450/?mixed-media' },
    { id: 10, title: 'Conceptual Art', artist: 'Lisa Park', imageUrl: 'https://source.unsplash.com/random/300x400/?conceptual' },
    { id: 11, title: 'Photography', artist: 'Robert Taylor', imageUrl: 'https://source.unsplash.com/random/300x500/?photography' },
    { id: 12, title: 'Sketch', artist: 'Amanda White', imageUrl: 'https://source.unsplash.com/random/300x350/?sketch' },
  ];

  return (
    <div className="home-container">
      <div className="welcome-banner">
        <h1>Discover Amazing Artwork</h1>
        <p>Explore and connect with artists from around the world</p>
      </div>
      
      <div className="art-grid">
        {artPosts.map(post => (
          <div className="art-card" key={post.id}>
            <div className="art-image">
              <img src={post.imageUrl} alt={post.title} />
            </div>
            <div className="art-info">
              <h3>{post.title}</h3>
              <p>by {post.artist}</p>
              <div className="art-actions">
                <button className="like-button">
                  <i className="far fa-heart"></i>
                </button>
                <button className="comment-button">
                  <i className="far fa-comment"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 