import React from 'react';

const Profile = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        background: '#121212',
        height: '100vh',
        color: '#e0e0e0',
    };

    const headerStyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    };

    const paragraphStyle = {
        fontSize: '1.3rem',
        textAlign: 'center',
        marginBottom: '30px',
        maxWidth: '600px',
        lineHeight: '1.6',
    };

    const cardStyle = {
        border: 'none',
        borderRadius: '12px',
        padding: '20px',
        margin: '15px',
        width: '320px',
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.5)',
        backgroundColor: '#1e1e1e',
        color: '#e0e0e0',
        transition: 'transform 0.3s, box-shadow 0.3s',
    };

    const cardHoverStyle = {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.7)',
    };

    const cardHeaderStyle = {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#90caf9',
    };

    const cardTextStyle = {
        fontSize: '1.1rem',
        color: '#b0bec5',
    };

    const cardContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Your Profile</h1>
            <p style={paragraphStyle}>
                View your participation history and digital certificates here.
            </p>
            <div style={cardContainerStyle}>
                <div
                    style={cardStyle}
                    // onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                    // onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}

                >
                    <h2 style={cardHeaderStyle}>Participation History</h2>
                    <p style={cardTextStyle}>- Event: Hackathon 2023</p>
                    <p style={cardTextStyle}>- Event: Web Development Workshop</p>
                    <p style={cardTextStyle}>- Event: AI Bootcamp</p>
                </div>
                <div
                    style={cardStyle}
                    // onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                    // onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
                >
                    <h2 style={cardHeaderStyle}>Digital Certificates</h2>
                    <p style={cardTextStyle}>- Certificate: React Basics</p>
                    <p style={cardTextStyle}>- Certificate: Advanced JavaScript</p>
                    <p style={cardTextStyle}>- Certificate: UI/UX Design</p>
                </div>
                <div
                    style={cardStyle}
                    // onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                    // onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
                    
                >
                    <h2 style={cardHeaderStyle}>Digital Certificates</h2>
                    <p style={cardTextStyle}>- Certificate: React Basics</p>
                    <p style={cardTextStyle}>- Certificate: Advanced JavaScript</p>
                    <p style={cardTextStyle}>- Certificate: UI/UX Design</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
