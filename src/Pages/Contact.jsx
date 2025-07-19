import React, { useState } from 'react';

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission success
    setIsMessageSent(true);
    setTimeout(() => setIsMessageSent(false), 3000); // Hide message after 3 seconds
  };

  const handleCloseNotification = () => {
    setIsMessageSent(false);
  };

  const styles = {
    body: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 14,
      backgroundImage: "url('https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg')",
      backgroundSize: 'cover',
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    contactContainer: {
      width: 400,
      maxWidth: 500,
      color: '#666666',
      marginBottom: '100px',
    },
    contactForm: {
      boxShadow: '-3px -3px 7px #99969673, 2px 2px 5px rgba(227, 223, 223, 0.288)',
      borderRadius: 15,
      padding: 30,
      textAlign: 'center',
      margin: 'auto',
    },
    heading: {
      fontSize: 30,
      color: '#000000',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formElement: {
      margin: '10px auto',
      padding: 12,
      width: '100%',
      border: 'none',
      borderRadius: 25,
      background: '#dde1e7',
      color: '#595959',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
    },
    button: {
      background: 'hsl(62, 100%, 76%)',
      color: '#000',
      fontSize: 17,
      padding: '12px 0',
      width: '100%',
      border: 'none',
      borderRadius: 25,
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
      cursor: 'pointer',
    },
    socialLink: {
      fontSize: 20,
      color: '#070101',
      padding: 8,
      cursor: 'pointer',
    },
    notification: {
      position: 'fixed',
      top: '175px', // Adjust as per your navbar's height
      right: '20px',
      background: '#4CAF50',
      color: 'white',
      padding: '15px',
      borderRadius: '5px',
      display: isMessageSent ? 'block' : 'none',
      zIndex: 9999,
      animation: isMessageSent ? 'bounceIn 1s forwards' : '',
      transition: 'transform 0.3s',
      transformOrigin: 'top right',
      cursor: 'pointer',
    },
    closeButton: {
      position: 'absolute',
      top: '5px',
      right: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div>
      <div
        style={styles.notification}
        onClick={handleCloseNotification}
        onMouseEnter={(e) => (e.target.style.animation = '')} // Pause animation on hover
        onMouseLeave={(e) => (e.target.style.animation = isMessageSent ? 'bounceIn 1s forwards' : '')} // Resume animation on hover out
      >
        <div style={{ animation: 'fadeIn 0.5s forwards' }}>Message sent</div>
        <span style={styles.closeButton}>x</span>
      </div>
      <div style={styles.body}>
        <div style={styles.contactContainer}>
          <div style={styles.contactForm}>
            <h2 style={styles.heading}>Contact Us</h2>
            <form action="#" method="post" onSubmit={handleSubmit} style={styles.form}>
              <input type="text" placeholder="Enter Your Name" required style={styles.formElement} />
              <input type="email" placeholder="Enter Your Email" required style={styles.formElement} />
              <select style={styles.formElement}>
                <option value="Enquiry">Enquiry</option>
                <option value="complaint">Complaint</option>
                <option value="suggestions">Suggestions</option>
                <option value="damage">Damage</option>
              </select>
              <textarea placeholder="Enter Your Message" rows="5" required style={styles.formElement}></textarea>
              <button type="submit" style={styles.button}>Send Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
