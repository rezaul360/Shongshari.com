import { Container, Grid, Typography, Link, InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import InputTextField from './../../utils/StyledComponent/InputTextField';
import swal from 'sweetalert';
import Footer from '../../components/headerFooter/Footer';
import Header from '../../components/headerFooter/Header';
import './Contact.css';

const ContactButton = styled(Button)({
    '&': {
        background: '#379cf6',
        color: '#FFF',
        fontWeight: '500',
        padding: '6px 30px',
        borderRadius: "50px",
        border: '2px solid #379cf6',
        marginTop: '10px'
    },
    '&:hover': {
        borderColor: '#379cf6',
        background: "white",
        color: '#379cf6',
        transition: ".7s",
    }
});

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('dreamfly', 'template_kum66w9', form.current, 'rXikndND2k846guhn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Done",
        });
    };
    return (
        <div>
            <Header />
            <div className='contact-head'>
                <h1 className='contact-us'>Contact Us</h1>
            </div>
            <Container className='paddingY90'>
                <Grid container spacing={{ xs: 5, lg: 8 }}>
                    <Grid item xs={12} md={6} order={{ xs: 2, sm: 1 }}>
                        <Box className="map-img" sx={{ width: "100%", height: "100%", border: 'none' }}>
                            <iframe title="This is a Dream Fly location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3282331133146!2d90.36650911399796!3d23.8069244845615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1665644763355!5m2!1sen!2sbd" width="100%" height="100%" style={{ border: "1px solid #e6e6e6", marginTop: "5px" }} allowfullscreen="" loading="lazy"></iframe>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} order={{ xs: 1, sm: 2 }}>
                        <Typography sx={{ fontSize: "20px", color: "#379cf6", fontWeight: 700, mb: 1 }}>
                            Shongshari
                        </Typography>
                        <Typography variant='h3' sx={{ color: "rgb(20, 19, 19);" }}>
                            How to Contact with Us?
                        </Typography>
                        <Typography sx={{ fontSize: "18px", pt: 1, color: '#3F525A' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed. Numquam eos similique repella.
                        </Typography>
                        <Box sx={{ py: 3, display: "flex", borderBottom: "1px dashed #b39ddb" }}>
                            <Box className="contact-icon-box">
                                <Link href="#"><i className="ri-map-pin-fill contact-icon"></i></Link>
                            </Box>
                            <Box sx={{ ml: 3 }}>
                                <Typography variant='h3' sx={{ color: "#379cf6" }}>
                                    Our Location
                                </Typography>
                                <Typography sx={{ color: "#3F525A" }}>
                                    Mirpur, Dhaka
                                </Typography>
                                <Typography sx={{ color: "#3F525A" }}>
                                    Find Us On google Map
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ py: 3, display: "flex", borderBottom: "1px dashed #b39ddb" }}>
                            <Box className="contact-icon-box">
                                <Link href="#"><Link href="#" ><i className="ri-phone-fill contact-icon"></i></Link></Link>
                            </Box>
                            <Box sx={{ ml: 3 }}>
                                <Typography variant='h3' sx={{ color: "#379cf6" }}>
                                    Our Phone
                                </Typography>
                                <Typography sx={{ color: "#3F525A" }}>
                                    +880 17000 0000
                                </Typography>
                                <Typography sx={{ color: "#3F525A" }}>
                                    +880 14000 0000
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ pt: 3, display: "flex", }}>
                            <Box className="contact-icon-box">
                                <Link href="#"><i className="ri-mail-fill contact-icon"></i></Link>
                            </Box>
                            <Box sx={{ ml: 3 }}>
                                <Typography variant='h3' sx={{ color: "#379cf6" }}>
                                    Our Email
                                </Typography>
                                <Typography sx={{ color: "#3F525A" }}>
                                    shongshari@gmail.com
                                </Typography>
                                <Typography sx={{ color: "#3F525A" }}>
                                shongshari.bd@gmail.com
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Contact From Section */}

            <Box className='contact paddingY90'>
                <Container>
                    <Box sx={{ mx: { sm: "50px", md: 0, lg: 0 } }}>
                        <Grid container spacing={{ md: 5, xs: 8 }}>
                            <Grid item xs={12} md={6}>
                                <Typography sx={{ fontSize: "20px", color: "#379cf6", fontWeight: 600, mb: 1, mt: 10 }}>
                                    Talk to us
                                </Typography>
                                <Typography variant='h3' sx={{ color: "rgb(20, 19, 19);" }}>
                                    Any Question?
                                </Typography>
                                <Typography variant='h3' sx={{ color: "rgb(20, 19, 19);" }}>
                                    Fell Free to Contact
                                </Typography>
                                <Typography sx={{ fontSize: "18px", mt: 2, mb: 3, color: '#3F525A' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed. Numquam eos similique repella.
                                </Typography>
                                <Box sx={{ display: "flex", mt: 2 }}>
                                    <a href="#a" sx={{ mr: 1 }} className='social-icon-box'>
                                        <i className="ri-facebook-fill social-icon"></i>
                                    </a>
                                    <a href="#a" sx={{ mr: 1 }} className='social-icon-box'>
                                        <i className="ri-twitter-fill social-icon"></i></a>
                                    <a href="#a" sx={{ mr: 1 }} className='social-icon-box'>
                                        <i className="ri-youtube-fill social-icon"></i>
                                    </a>
                                    <a href="#a" sx={{ mr: 1 }} className='social-icon-box'>
                                        <i className="ri-instagram-fill social-icon"></i>
                                    </a>
                                </Box>
                            </Grid>

                            {/* Contact From  */}

                            <Grid item xs={12} md={6} sx={{mt: 10}}>

                                <form ref={form} onSubmit={sendEmail}>
                                    <Grid container direction="row" sx={{ mb: "20px" }} justifyContent="space-between" alignItems="center" spacing={{ xs: 3, md: 1.5 }}>
                                        <Grid item xs={12} md={6}>
                                            <InputTextField
                                                label="Name"
                                                id="custom-css-outlined-input"
                                                fullWidth
                                                name="user_name"
                                                type="name"
                                                sx={{ bgcolor: "white" }}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <i className="fa-solid fa-user"></i>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />

                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <InputTextField
                                                label="Email"
                                                id="custom-css-outlined-input"
                                                fullWidth
                                                required
                                                name="user_email"
                                                type="email"
                                                sx={{ bgcolor: "white" }}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <i className="fa-solid fa-envelope"></i>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <InputTextField
                                                label="Phone"
                                                id="custom-css-outlined-input"
                                                fullWidth
                                                type="number"
                                                name="phone"
                                                sx={{ bgcolor: "white" }}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <i className="fa-solid fa-phone"></i>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <InputTextField
                                                label="Subject"
                                                id="custom-css-outlined-input"
                                                fullWidth
                                                name="subject"
                                                type="text"
                                                sx={{ bgcolor: "white" }}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <i className="fa-solid fa-file-lines"></i>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <InputTextField
                                                label="Massage"
                                                id="custom-css-outlined-input"
                                                fullWidth
                                                type="text"
                                                rows={5}
                                                required
                                                multiline
                                                name="message"
                                                sx={{ bgcolor: "white" }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <ContactButton
                                        type="submit"
                                        sx={{ textTransform: 'capitalize', fontSize: "18px" }}>
                                        Submit Now
                                    </ContactButton>
                                </form>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </div>
    );
};

export default Contact;