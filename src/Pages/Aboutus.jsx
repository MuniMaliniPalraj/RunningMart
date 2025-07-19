import React from 'react';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

const Aboutus = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg")',
        backgroundSize: 'cover',
        padding: '30px 0',
      }}
    >
    <div className="container">
    <div
      className="heading text-center"
      style={{
        fontSize: '25px',
        fontWeight: 700,
        margin: '10px',
        padding: '0px',
        textAlign: 'center',
      }}
    >
      <h2>
        <u>About</u> <span style={{ color: '#fbe71f' }}><u>Us</u></span>
      </h2>
      <p
        style={{
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: '1.7',
          textAlign: 'center',
          color: '#0b0303',
          margin: '20px 0 60px',
          padding: '0',
        }}
      >
        Discover a world of elegance, style, and endless possibilities at
        <b> RUNNING MART</b>. We're not just a dress destination; we're a
        celebration of individuality, confidence, and the beauty that comes
        with every twirl. Get ready to redefine your style game with.
        We're curating the hottest trends, fashion-forward looks, and
        runway-inspired vibes that will have you turning heads wherever you
        go
      </p>
      <div className="container">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: '0 0 50%', marginRight: '20px' }}>
          <img
            src="https://watermark.lovepik.com/photo/40027/7318.jpg_wh1200.jpg"
            alt="about"
            className="img-fluid"
            width="100%"
          />
        </div>
        <div style={{ flex: '0 0 50%' }}>
          <div
            className="heading text-center"
            style={{
              fontSize: '30px',
              fontWeight: 700,
              margin:'0',
              padding: '0',
            }}
          >
            <h3>
              Fancy <span style={{ color: '#fbe71f' }}> Forward!!</span>
            </h3>
          </div>
          <p
            style={{
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '1.7',
              color: '#030303',
              margin: '0px 10px 15px',
              padding: '0',
            }}
          >
            <b>RUNNING CART</b> is your go-to source for exquisite dresses that make a
            statement. Our team is comprised of fashion enthusiasts and experts who
            are dedicated to curating a collection that embodies the latest trends
            while maintaining a timeless charm. We're here to empower you to express
            your individuality, embrace the latest trends, and be unapologetically
            fabulous. Our carefully curated collection reflects the pulse of the
            fashion world.
          </p>
          <div style={{ color: 'grey' }}>
            <div className="row">
              <div className="col-md-6">
                <h4 style={{ color: 'blue', margin:'0',padding:'0',fontSize:'14px'}}>
                  <StarBorderRoundedIcon /> Awesome Design
                </h4>
              </div>
              <div className="col-md-6">
                <h4 style={{ color: 'green', margin:'0',padding:'0',fontSize:'14px'}}>
                  <StarBorderRoundedIcon /> Creative Design
                </h4>
              </div>
              <div className="col-md-6">
                <h4 style={{ color: 'red', margin:'0',padding:'0',fontSize:'14px'}}>
                  <StarBorderRoundedIcon /> Curated Elegance
                </h4>
              </div>
              <div className="col-md-6">
                <h4 style={{ color: 'purple', margin:'0',padding:'0',fontSize:'14px'}}>
                  <StarBorderRoundedIcon /> Size-Inclusive
                </h4>
              </div>
              <div className="col-md-6">
                <h4 style={{ color: 'orange', margin:'0',padding:'0',fontSize:'14px' }}>
                  <StarBorderRoundedIcon /> Effortlessly stylish
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
    </div>
  );
};

export default Aboutus;