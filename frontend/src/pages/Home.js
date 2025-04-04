import React from 'react';

const Home = () => {
    const containerStyle = {
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(135deg, #1e1e1e, #121212)',
        color: '#f5f5f5',
        minHeight: '100vh',
    };

    const cardContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '30px',
        marginTop: '30px',
        padding: '20px',
    };

    const cardStyle = {
        border: 'none',
        borderRadius: '15px',
        padding: '20px',
        width: '300px',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)',
        background: 'linear-gradient(135deg, #2a2a2a, #1e1e1e)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
    };

    const cardHoverStyle = {
        transform: 'scale(1.05)',
        boxShadow: '0 12px 25px rgba(0, 0, 0, 0.7)',
    };

    const cardTitleStyle = {
        fontSize: '22px',
        fontWeight: 'bold',
        marginBottom: '12px',
        color: '#4caf50',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    };

    const cardTextStyle = {
        fontSize: '16px',
        color: '#dcdcdc',
        lineHeight: '1.6',
    };

    const cardOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(76, 175, 80, 0.1)',
        borderRadius: '15px',
        zIndex: -1,
        transition: 'opacity 0.3s',
        opacity: 0,
    };

    const cardHoverOverlayStyle = {
        opacity: 1,
    };

    const handleMouseEnter = (e) => {
        Object.assign(e.currentTarget.style, cardHoverStyle);
        const overlay = e.currentTarget.querySelector('.card-overlay');
        Object.assign(overlay.style, cardHoverOverlayStyle);
    };

    const handleMouseLeave = (e) => {
        Object.assign(e.currentTarget.style, cardStyle);
        const overlay = e.currentTarget.querySelector('.card-overlay');
        Object.assign(overlay.style, cardOverlayStyle);
    };

    return (
        <div style={containerStyle}>
            <h1>Welcome to NSS Connect</h1>
            <p>
                Stay updated with NSS events, register for upcoming activities, and manage your participation seamlessly.
                Explore events and contribute to our community initiatives!
            </p>
            <div style={cardContainerStyle}>
                <div
                    style={cardStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="card-overlay" style={cardOverlayStyle}></div>
                    <div style={cardTitleStyle}>Upcoming Events</div>
                    <p style={cardTextStyle}>Discover and register for the latest NSS events happening near you.</p>
                </div>
                <div
                    style={cardStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="card-overlay" style={cardOverlayStyle}></div>
                    <div style={cardTitleStyle}>Volunteer Opportunities</div>
                    <p style={cardTextStyle}>Join hands with us to make a difference in the community.</p>
                </div>
                <div
                    style={cardStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="card-overlay" style={cardOverlayStyle}></div>
                    <div style={cardTitleStyle}>Community Impact</div>
                    <p style={cardTextStyle}>Learn about the positive changes NSS has brought to society.</p>
                </div>
            </div>
            <footer style={{ marginTop: '50px', color: '#b0bec5' }}>
                &copy; {new Date().getFullYear()} NSS Connect. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;