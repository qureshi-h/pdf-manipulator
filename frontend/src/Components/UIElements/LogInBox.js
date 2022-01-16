import React, { useState } from "react";
import ReactModalLogin from "react-modal-login";
import "react-modal-login/dist/react-modal-login.css";

import { facebookConfig, googleConfig } from "../../socialConfig";

export const LogInBox = ({ showModal, initialTab, setShowModel }) => {
    const [state, setState] = useState({
        loggedIn: null,
        loading: false,
        error: null,
        recoverPasswordSuccess: null,
    });

    const addUser = (name, email, password, picture) => {
        fetch("https://server-online-pdf-manager.herokuapp.com/auth/addUser", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
            }),
            body: JSON.stringify({
                name,
                email,
                password,
                picture: "none",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.status_code === 200) {
                    localStorage.setItem("name", name);
                    localStorage.setItem("picture", picture);
                    localStorage.setItem("loggedIn", true);
                    setShowModel(false);
                } else alert(data.status_message);
            });
    };

    const onLogin = async (e, a, c) => {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        if (!email || !password) {
            setState({ error: true });
        } else {
            fetch("http://localhost:5001/auth/authenticateUser", {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json",
                }),
                body: JSON.stringify({
                    email,
                    password,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data.status_code === 200) {
                        if (data.result) {
                            localStorage.setItem("name", data.name);
                            localStorage.setItem("picture", data.picture);
                            localStorage.setItem("loggedIn", true);
                            setShowModel(false);
                        } else {
                            setState({ error: true });
                        }
                    } else alert(data.status_message);
                });
        }
    };

    const onRegister = () => {
        const login = document.querySelector("#login").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        if (!login || !email || !password) {
            setState({ error: true });
        } else {
            addUser(login, email, password, "none");
        }
    };

    const onRecoverPassword = () => {
        console.log("email: " + document.querySelector("#email").value);

        const email = document.querySelector("#email").value;

        if (!email) {
            setState({
                ...state,
                error: true,
                recoverPasswordSuccess: false,
            });
        } else {
            setState({
                ...state,
                error: null,
                recoverPasswordSuccess: true,
            });
        }
    };

    const onLoginSuccess = (method, response) => {
        if (method === "facebook") {
            window.FB.api(
                "/" + response.authResponse.userID + "/",
                { fields: "name, email, picture" },
                function (response) {
                    if (response && !response.error) {
                        addUser(
                            response.name,
                            response.email,
                            null,
                            response.picture.data.url
                        );
                    }
                }
            );
        } else if (method === "google") {
            addUser(
                window.gapi.auth2.getAuthInstance().currentUser.Mb.su.qf,
                window.gapi.auth2.getAuthInstance().currentUser.Mb.su.ev,
                null,
                "none"
            );
        }

        setState({
            ...state,
            error: null,
            loggedIn: method,
            loading: false,
        });
    };

    const onLoginFail = (method, response) => {
        console.log(response);
        setState({
            ...state,
            loading: false,
            error: response,
        });
    };

    const startLoading = () => {
        setState({ ...state, loading: true });
    };

    const finishLoading = () => {
        setState({
            ...state,
            loading: false,
        });
    };

    const afterTabsChange = () => {
        setState({
            ...state,
            error: null,
            recoverPasswordSuccess: false,
        });
    };

    const closeModal = () => {
        setState({
            ...state,
            error: null,
            loading: false,
        });
        setShowModel(false);
    };

    const loggedIn = state.loggedIn ? (
        <div>
            <p>You are signed in with: {state.loggedIn}</p>
        </div>
    ) : (
        <div>
            <p>You are signed out</p>
        </div>
    );

    const isLoading = state.loading;

    return (
        <div>
            <ReactModalLogin
                visible={showModal}
                onCloseModal={closeModal}
                loading={isLoading}
                initialTab={initialTab}
                error={state.error}
                tabs={{
                    afterChange: afterTabsChange,
                }}
                startLoading={startLoading}
                finishLoading={finishLoading}
                form={{
                    onLogin: onLogin,
                    onRegister: onRegister,
                    onRecoverPassword: onRecoverPassword,

                    recoverPasswordSuccessLabel: state.recoverPasswordSuccess
                        ? {
                              label: "New password has been sent to your mailbox!",
                          }
                        : null,
                    recoverPasswordAnchor: {
                        label: "Forgot your password?",
                    },
                    loginBtn: {
                        label: "Sign in",
                    },
                    registerBtn: {
                        label: "Sign up",
                    },
                    recoverPasswordBtn: {
                        label: "Send new password",
                    },
                    loginInputs: [
                        {
                            containerClass: "RML-form-group",
                            label: "Email",
                            type: "email",
                            inputClass: "RML-form-control",
                            id: "email",
                            name: "email",
                            placeholder: "Email",
                        },
                        {
                            containerClass: "RML-form-group",
                            label: "Password",
                            type: "password",
                            inputClass: "RML-form-control",
                            id: "password",
                            name: "password",
                            placeholder: "Password",
                        },
                    ],
                    registerInputs: [
                        {
                            containerClass: "RML-form-group",
                            label: "Name",
                            type: "text",
                            inputClass: "RML-form-control",
                            id: "login",
                            name: "login",
                            placeholder: "Name",
                        },
                        {
                            containerClass: "RML-form-group",
                            label: "Email",
                            type: "email",
                            inputClass: "RML-form-control",
                            id: "email",
                            name: "email",
                            placeholder: "Email",
                        },
                        {
                            containerClass: "RML-form-group",
                            label: "Password",
                            type: "password",
                            inputClass: "RML-form-control",
                            id: "password",
                            name: "password",
                            placeholder: "Password",
                        },
                    ],
                    recoverPasswordInputs: [
                        {
                            containerClass: "RML-form-group",
                            label: "Email",
                            type: "email",
                            inputClass: "RML-form-control",
                            id: "email",
                            name: "email",
                            placeholder: "Email",
                        },
                    ],
                }}
                separator={{
                    label: "or",
                }}
                providers={{
                    facebook: {
                        config: facebookConfig,
                        onLoginSuccess: onLoginSuccess,
                        onLoginFail: onLoginFail,
                        inactive: isLoading,
                        label: "Continue with Facebook",
                    },
                    google: {
                        config: googleConfig,
                        onLoginSuccess: onLoginSuccess,
                        onLoginFail: onLoginFail,
                        inactive: isLoading,
                        label: "Continue with Google",
                    },
                }}
            />
            {loggedIn}
        </div>
    );
};
