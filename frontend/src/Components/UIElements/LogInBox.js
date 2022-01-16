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

    const onLogin = async (e, a, c) => {
        console.log(e, a, c);
        console.log("email: " + document.querySelector("#email").value);
        console.log("password: " + document.querySelector("#password").value);

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        if (!email || !password) {
            setState({
                error: true,
            });
        } else {
            onLoginSuccess("form");
        }
    };

    const onRegister = () => {
        console.log("login: " + document.querySelector("#login").value);
        console.log("email: " + document.querySelector("#email").value);
        console.log("password: " + document.querySelector("#password").value);

        const login = document.querySelector("#login").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        if (!login || !email || !password) {
            setState({
                error: true,
            });
        } else {
            onLoginSuccess("form");
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
                        localStorage.setItem(
                            "name",
                            response.name.split(" ")[0]
                        );
                        localStorage.setItem(
                            "picture",
                            response.picture.data.url
                        );
                        localStorage.setItem("loggedIn", true);
                        setShowModel(false);
                    }
                }
            );
        } else if (method === "google") {
            localStorage.setItem(
                "name",
                window.gapi.auth2
                    .getAuthInstance()
                    .currentUser.Mb.su.qf.split(" ")[0]
            );
            localStorage.setItem("picture", "none");
            localStorage.setItem("loggedIn", true);
            setShowModel(false);

            // console.log(
            //     window.gapi.auth2.getAuthInstance().currentUser.Mb.su.ev
            // );
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
        setState({
            ...state,
            loading: true,
        });
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
