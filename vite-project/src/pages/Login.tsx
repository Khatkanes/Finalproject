import Colors from '../assets/shared/Colors';
import logo from '../assets/images/LOGO.png';
import GoogleIcon from '@mui/icons-material/Google';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

import './Login.css'

const Login: React.FC = () => {

    return (
        <>
            <div className='bg-con'>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <div className='container-login'>

                        <motion.div animate={{ y: [20, -20, 20] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", bounce: 5 }}>
                            <img src={logo} className='logo-web' alt="logo" />
                        </motion.div>
                        <motion.div animate={{ y: [-20, 20, -20] }}
                            transition={{ repeat: Infinity, duration: 7, bounce: 10 }}>
                            <div className='cycle1'></div>
                        </motion.div>
                        <motion.div animate={{ y: [-20, 20, -20] }}
                            transition={{ repeat: Infinity, duration: 7, bounce: 10 }}>
                            <div className='cycle2'></div>
                        </motion.div>
                        <motion.div animate={{ y: [-30, 30, -30] }}
                            transition={{ repeat: Infinity, duration: 7, bounce: 10 }}>
                            <div className='cycle3'></div>
                        </motion.div>

                        <Link target='_blank' style={{ position: 'relative', top: -120, textDecoration: 'none' }} to={`/courses`}>
                            <button className='button'>
                                <GoogleIcon style={{ color: Colors.white, marginRight: 10 }}></GoogleIcon>
                                <h2>Sign In with Google</h2>
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Login;
