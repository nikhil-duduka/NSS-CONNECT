// import React from 'react';
// import { Card, CardContent, Typography, Button } from '@mui/material';

// const EventCard = ({ event, onRegister }) => {
//     return ( <
//         Card className = "event-card" >
//         <
//         CardContent >
//         <
//         Typography variant = "h5" > { event.name } < /Typography> <
//         Typography variant = "body2"
//         color = "text.secondary" >
//         Date: { event.date } <
//         /Typography> <
//         Typography variant = "body2"
//         color = "text.secondary" >
//         Location: { event.location } <
//         /Typography> <
//         Typography variant = "body1"
//         style = {
//             { margin: '10px 0' } } > { event.description } <
//         /Typography> <
//         Button variant = "contained"
//         onClick = {
//             () => onRegister(event._id) } >
//         Register <
//         /Button> <
//         /CardContent> <
//         /Card>
//     );
// };

// export default EventCard;

//
import React from 'react';

const EventCard = ({ event, onRegister }) => {
    const cardStyle = {
        backgroundColor: '#1e1e1e',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        color: '#ffffff'
    };

    const imageStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    };

    const contentStyle = {
        padding: '20px',
        flex: '1'
    };

    const titleStyle = {
        fontSize: '22px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#ffffff'
    };

    const metaStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px',
        color: '#bdc3c7',
        fontSize: '14px'
    };

    const iconStyle = {
        marginRight: '8px',
        color: '#3498db'
    };

    const descriptionStyle = {
        margin: '15px 0',
        lineHeight: '1.6',
        color: '#dcdcdc'
    };

    const footerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
        borderTop: '1px solid #333333',
        backgroundColor: '#2c2c2c'
    };

    const priceStyle = {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: '18px'
    };

    const buttonStyle = {
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'background-color 0.3s',
        outline: 'none'
    };

    const availabilityStyle = {
        fontSize: '14px',
        color: event.slots < 20 ? '#e74c3c' : '#27ae60',
        marginTop: '5px',
        fontWeight: event.slots < 20 ? 'bold' : 'normal'
    };

    return (
        <div 
            style={cardStyle} 
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.5)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
            }}
        >
            <img src={event.image} alt={event.title} style={imageStyle} />
            
            <div style={contentStyle}>
                <h3 style={titleStyle}>{event.title}</h3>
                
                <div style={metaStyle}>
                    <span style={iconStyle}>📅</span>
                    <span>{event.date}</span>
                </div>
                
                <div style={metaStyle}>
                    <span style={iconStyle}>📍</span>
                    <span>{event.location}</span>
                </div>
                
                <p style={descriptionStyle}>{event.description}</p>
                
                <div style={availabilityStyle}>
                    {event.slots < 20 
                        ? `Only ${event.slots} spots left!` 
                        : `${event.slots} spots available`}
                </div>
            </div>
            
            <div style={footerStyle}>
                <span style={priceStyle}>{event.price}</span>
                <button 
                    style={buttonStyle}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#2980b9';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#3498db';
                    }}
                    onClick={() => onRegister(event._id)}
                >
                    Register Now
                </button>
            </div>
        </div>
    );
};

export default EventCard;
