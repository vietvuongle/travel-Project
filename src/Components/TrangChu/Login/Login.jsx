import React, { useState, useEffect } from 'react';
import './login.css';

const LoginRegisterPanel = () => {
    const [activePanel, setActivePanel] = useState('login');

    useEffect(() => {
        document.querySelector('.login-info-box').style.display = 'none';
        document.querySelector('.login-show').classList.add('show-log-panel');

        const handleRadioChange = () => {
            if (document.getElementById('log-login-show').checked) {
                document.querySelector('.register-info-box').style.display = 'none';
                document.querySelector('.login-info-box').style.display = 'block';

                document.querySelector('.white-panel').classList.add('right-log');
                document.querySelector('.register-show').classList.add('show-log-panel');
                document.querySelector('.login-show').classList.remove('show-log-panel');
            } else if (document.getElementById('log-reg-show').checked) {
                document.querySelector('.register-info-box').style.display = 'block';
                document.querySelector('.login-info-box').style.display = 'none';

                document.querySelector('.white-panel').classList.remove('right-log');
                document.querySelector('.login-show').classList.add('show-log-panel');
                document.querySelector('.register-show').classList.remove('show-log-panel');
            }
        };

        document.querySelectorAll('.login-reg-panel input[type="radio"]').forEach((radio) => {
            radio.addEventListener('change', handleRadioChange);
        });

        return () => {
            document.querySelectorAll('.login-reg-panel input[type="radio"]').forEach((radio) => {
                radio.removeEventListener('change', handleRadioChange);
            });
        };
    }, []);

    return (
        <div className="login-reg-panel">
            <div className="login-info-box">
                <h2>Bạn đã có tài khoản?</h2>
                <label id="label-register" htmlFor="log-reg-show">
                    Login
                </label>
                <input
                    type="radio"
                    name="active-log-panel"
                    id="log-reg-show"
                    defaultChecked={activePanel === 'login'}
                    onChange={() => setActivePanel('login')}
                />
            </div>

            <div className="register-info-box">
                <h2>Bạn chưa có tài khoản?</h2>
                <label id="label-login" htmlFor="log-login-show">
                    Register
                </label>
                <input
                    type="radio"
                    name="active-log-panel"
                    id="log-login-show"
                    defaultChecked={activePanel === 'register'}
                    onChange={() => setActivePanel('register')}
                />
            </div>

            <div className="white-panel">
                <div className={`login-show ${activePanel === 'login' ? 'show-log-panel' : ''}`}>
                    <h2>LOGIN</h2>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="button" value="Login" />
                    <a href="/">Forgot password?</a>
                </div>
                <div className={`register-show ${activePanel === 'register' ? 'show-log-panel' : ''}`}>
                    <h2>REGISTER</h2>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <input type="button" value="Register" />
                </div>
            </div>
        </div>
    );
};

export default LoginRegisterPanel;
