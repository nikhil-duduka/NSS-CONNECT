// import React, { useState, useEffect } from 'react';
// import EventCard from '../components/EventCard';
// import RegistrationForm from '../components/RegistrationForm';
// import axios from 'axios';

// const Events = () => {
//     const [events, setEvents] = useState([]);
//     const [openDialog, setOpenDialog] = useState(false);
//     const [selectedEvent, setSelectedEvent] = useState(null);

//     useEffect(() => {
//         const fetchEvents = async() => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/events');
//                 setEvents(response.data);
//             } catch (error) {
//                 console.error('Error fetching events:', error);
//             }
//         };
//         fetchEvents();
//     }, []);

//     const handleRegister = (eventId) => {
//         setSelectedEvent(eventId);
//         setOpenDialog(true);
//     };

//     const handleRegistrationSubmit = async(data) => {
//         try {
//             await axios.post('http://localhost:5000/api/register', data);
//             alert('Registration successful!');
//             setOpenDialog(false);
//         } catch (error) {
//             console.error('Registration failed:', error);
//         }
//     };

//     return ( <
//         div className = "page-container" >
//         <
//         h1 > Upcoming Events < /h1> <
//         div className = "events-grid" > {
//             events.map(event => ( <
//                 EventCard key = { event._id }
//                 event = { event }
//                 onRegister = { handleRegister }
//                 />
//             ))
//         } <
//         /div> <
//         RegistrationForm open = { openDialog }
//         onClose = {
//             () => setOpenDialog(false) }
//         eventId = { selectedEvent }
//         onSubmit = { handleRegistrationSubmit }
//         /> <
//         /div>
//     );
// };

// export default Events;


//
import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import RegistrationForm from '../components/RegistrationForm';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Sample static events data
    const staticEvents = [
        {
            _id: '1',
            title: 'Tech Conference 2025',
            date: 'May 15-17, 2025',
            location: 'San Francisco Convention Center',
            image: 'https://via.placeholder.com/400/3498db/ffffff?text=Tech+Conference',
            description: 'Join industry leaders for three days of cutting-edge technology discussions and networking opportunities.',
            price: '$299',
            slots: 150
        },
        {
            _id: '2',
            title: 'Design Workshop',
            date: 'June 5, 2025',
            location: 'Creative Hub, New York',
            image: 'https://via.placeholder.com/400/9b59b6/ffffff?text=Design+Workshop',
            description: 'An intensive one-day workshop focused on UI/UX trends and practical design skills.',
            price: '$149',
            slots: 50
        },
        {
            _id: '3',
            title: 'Startup Pitch Night',
            date: 'April 20, 2025',
            location: 'Innovation Center, Austin',
            image: 'https://via.placeholder.com/400/e74c3c/ffffff?text=Pitch+Night',
            description: 'Watch innovative startups pitch to investors and network with entrepreneurs.',
            price: '$75',
            slots: 200
        },
        {
            _id: '4',
            title: 'AI Summit',
            date: 'July 10-11, 2025',
            location: 'Tech Campus, Seattle',
            image: 'https://via.placeholder.com/400/27ae60/ffffff?text=AI+Summit',
            description: 'Explore the latest advancements in artificial intelligence and machine learning.',
            price: '$249',
            slots: 120
        }
    ];

    useEffect(() => {
        // Try to fetch from API, fall back to static data
        const fetchEvents = async() => {
            try {
                const response = await axios.get('http://localhost:5000/api/events');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
                // Use static data if API fails
                setEvents(staticEvents);
            }
        };
        
        fetchEvents();
    }, []);

    const handleRegister = (eventId) => {
        setSelectedEvent(eventId);
        setOpenDialog(true);
    };

    const handleRegistrationSubmit = async(data) => {
        try {
            await axios.post('http://localhost:5000/api/register', data);
            alert('Registration successful!');
            setOpenDialog(false);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    // Inline CSS styles
    const styles = {
        pageContainer: {
            width: '100vw',
            height: '100vh',
            margin: '0',
            padding: '40px 20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: 'rgb(30, 30, 30)', // Light peach background
            backgroundImage: 'url("https://via.placeholder.com/1200x800/ffcccb/ffffff?text=Party+Theme")', // Party-themed background
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            overflow: 'auto'
        },
        header: {
            textAlign: 'center',
            marginBottom: '50px',
            fontSize: '36px',
            fontWeight: '700',
            position: 'relative',
            paddingBottom: '15px',
            textShadow: '2px 2px 4px rgba(209, 13, 13, 0.3)' // Subtle shadow for better readability
        },
        headerAfter: {
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '4px',
            backgroundColor: 'white', // Match header color
            borderRadius: '2px' // Rounded edges for a softer look
        },
        eventsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '30px'
        },
        noEvents: {
            textAlign: 'center',
            fontSize: '18px',
            color: '#7f8c8d',
            marginTop: '50px'
        }
    };

    return (
        <div style={styles.pageContainer}>
            <h1 style={styles.header}>
                Upcoming Events
                <div style={styles.headerAfter}></div>
            </h1>
            
            {events.length > 0 ? (
                <div style={styles.eventsGrid}>
                    {events.map(event => (
                        <EventCard 
                            key={event._id}
                            event={event}
                            onRegister={handleRegister}
                        />
                    ))}
                </div>
            ) : (
                <div style={styles.noEvents}>
                    No events currently available. Please check back later.
                </div>
            )}
            
            <RegistrationForm 
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                eventId={selectedEvent}
                onSubmit={handleRegistrationSubmit}
            />
        </div>
    );
};

export default Events;