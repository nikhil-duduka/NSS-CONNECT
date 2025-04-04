// import React, { useState } from 'react';
// import { Dialog, DialogTitle, DialogContent, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// const RegistrationForm = ({ open, onClose, eventId, onSubmit }) => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         role: 'participant'
//     });

//     const handleChange = (e) => {
//         setFormData({...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = () => {
//         onSubmit({...formData, eventId });
//         onClose();
//     };

//     return (
//         <Dialog open={open} onClose={onClose}>
//             <DialogTitle>Register for Event</DialogTitle>
//             <DialogContent>
//                 <TextField
//                     margin="dense"
//                     name="name"
//                     label="Full Name"
//                     fullWidth
//                     value={formData.name}
//                     onChange={handleChange}
//                 />
//                 <TextField
//                     margin="dense"
//                     name="email"
//                     label="Email"
//                     fullWidth
//                     value={formData.email}
//                     onChange={handleChange}
//                 />
//                 <FormControl fullWidth margin="dense">
//                     <InputLabel>Role</InputLabel>
//                     <Select
//                         name="role"
//                         value={formData.role}
//                         onChange={handleChange}
//                     >
//                         <MenuItem value="participant">Participant</MenuItem>
//                         <MenuItem value="volunteer">Volunteer</MenuItem>
//                     </Select>
//                 </FormControl>
//                 <Button
//                     onClick={handleSubmit}
//                     variant="contained"
//                     style={{ marginTop: '20px' }}
//                 >
//                     Submit
//                 </Button>
//             </DialogContent>
//         </Dialog>
//     );
// };

// export default RegistrationForm;

import React, { useState } from 'react';

const RegistrationForm = ({ open, onClose, eventId, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventId: eventId || ''
    });

    // Update eventId when prop changes
    React.useEffect(() => {
        if (eventId) {
            setFormData(prev => ({ ...prev, eventId }));
        }
    }, [eventId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    if (!open) return null;

    // Styles
    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    };

    const dialogStyle = {
        backgroundColor: 'white',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '500px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        position: 'relative'
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '15px',
        right: '15px',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '22px',
        cursor: 'pointer',
        color: '#95a5a6'
    };

    const titleStyle = {
        marginTop: '0',
        marginBottom: '30px',
        color: '#2c3e50',
        textAlign: 'center',
        fontSize: '24px'
    };

    const formGroupStyle = {
        marginBottom: '20px'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '8px',
        fontWeight: '600',
        color: '#34495e'
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        borderRadius: '4px',
        border: '1px solid #dcdfe6',
        fontSize: '16px',
        boxSizing: 'border-box'
    };

    const buttonStyle = {
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '12px 20px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '16px',
        width: '100%',
        marginTop: '10px',
        transition: 'background-color 0.3s'
    };

    return (
        <div style={overlayStyle}>
            <div style={dialogStyle}>
                <button 
                    style={closeButtonStyle} 
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>
                
                <h2 style={titleStyle}>Register for Event</h2>
                
                <form onSubmit={handleSubmit}>
                    <div style={formGroupStyle}>
                        <label style={labelStyle} htmlFor="name">Full Name</label>
                        <input
                            style={inputStyle}
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                        />
                    </div>
                    
                    <div style={formGroupStyle}>
                        <label style={labelStyle} htmlFor="email">Email Address</label>
                        <input
                            style={inputStyle}
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email address"
                        />
                    </div>
                    
                    <div style={formGroupStyle}>
                        <label style={labelStyle} htmlFor="phone">Phone Number</label>
                        <input
                            style={inputStyle}
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Enter your phone number"
                        />
                    </div>
                    
                    <button 
                        style={buttonStyle} 
                        type="submit"
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#2980b9';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#3498db';
                        }}
                    >
                        Complete Registration
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;