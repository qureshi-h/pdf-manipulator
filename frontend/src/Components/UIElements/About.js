import React from "react";

const AboutInfo = () => {
    return (
        <div>
            <p style={{ fontSize: "1.2em" }}>
                Welcome to the Online PDF Manager!
            </p>
            <p className="privacyText">
                Online PDF Manager is a Web App created explicity for dealing
                with PDF files. Users can edit, reorganize and merge PDF
                documents in a matter of minutes at no cost. The App was created
                in 2021, and continues to frequqntly add new features to enhance
                user experience.<br></br>
                <br></br> Please feel free to reach out to us with any feedback,
                suggestions or complaints at onlinepdfmanager@gmail.com.
                <br />
                <br />
                Happy Editing, <br /> The Online PDF Manager Team!
            </p>
        </div>
    );
};

class About extends React.PureComponent {
    render() {
        return (
            <div className="privacyBox">
                <h1
                    className="privacyHeadings"
                    style={{
                        textAlign: "center",
                        fontSize: "2.5em",
                        marginBottom: "5vh",
                    }}
                >
                    About Us
                </h1>
                <AboutInfo />
            </div>
        );
    }
}

export default About;
