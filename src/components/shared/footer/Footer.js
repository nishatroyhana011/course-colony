import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../../../context/theme/ThemeProvider';

const Footer = () => {
    const { isChecked } = useContext(themeContext);
    return (
        <div>
            <footer className={`footer p-10 text-base-content ${isChecked ? 'Dark' : 'Light'}`}>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit </Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered pr-8" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;