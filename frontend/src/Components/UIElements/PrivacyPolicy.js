import React from "react";

const EMAIL = "onlinepdfmanager@gmail.com";

const Welcome = () => {
    return (
        <div>
            <p style={{ fontSize: "1.2em" }}>Welcome to Online PDF Manager!</p>
            <p className="privacyText">
                Online PDF Manager is committed to your privacy. This notice
                describes our Privacy Policy and how we treat data collected on
                our website and through the services we offer accessible through
                mobile devices, computers, and tablets. The Online PDF Manager
                Privacy Policy is intended to inform and advise you about how we
                collect, use, and protect the personal information you provide.
                By visiting this site, you are accepting the practices described
                in this Privacy Policy. When we refer to “you” or “your”, we are
                referring to visitors to the Sites and Services, users of the
                Sites and Services, and subscribers to the Sites and Services.
            </p>
        </div>
    );
};

const WhatWeCollect = () => {
    return (
        <div>
            <h2 className="privacyHeadings">
                What is Personal Information and why do we collect it?
            </h2>
            <p className="privacyText">
                Personal Information is information or an opinion that
                identifies an individual. Examples of Personal Information we
                collect include: names, email addresses, and public profile
                pictures. This Personal Information is obtained when you sign up
                and from third parties. We don’t guarantee website links or
                policy of authorised third parties.
            </p>
            <p className="privacyText">
                We collect your Personal Information for the primary purpose of
                providing our services to you, providing information to our
                clients and marketing. We may also use your Personal Information
                for secondary purposes closely related to the primary purpose,
                in circumstances where you would reasonably expect such use or
                disclosure. You may unsubscribe from our mailing/marketing lists
                at any time by contacting us in writing.
            </p>
            <p className="privacyText">
                When we collect Personal Information we will, where appropriate
                and where possible, explain to you why we are collecting the
                information and how we plan to use it.
            </p>
        </div>
    );
};

const SensitiveInformation = () => {
    return (
        <div>
            <h2 className="privacyHeadings">Sensitive Information</h2>
            <p className="privacyText">
                Sensitive information is defined in the Privacy Act to include
                information or opinion about such things as an individual's
                racial or ethnic origin, political opinions, membership of a
                political association, religious or philosophical beliefs,
                membership of a trade union or other professional body, criminal
                record or health information.
            </p>

            <p className="privacyText">
                Sensitive information will be used by us only: <br />
                <br />• For the primary purpose for which it was obtained
                <br />• For a secondary purpose that is directly related to the
                primary purpose <br />• With your consent; or where required or
                authorised by law.
            </p>
            {/* <p className="privacyText">
                Though our Site offers a payment mechanism for entering Story
                Contests, all information for processing such payments is stored
                with our payment processor, Stripe. Please refer to Stripe’s
                privacy policy to learn about their privacy practices.
            </p> */}
        </div>
    );
};

const ThirdParties = () => {
    return (
        <div>
            <h2 className="privacyHeadings">Third Parties</h2>
            <p className="privacyText">
                Where reasonable and practicable to do so, we will collect your
                Personal Information only from you. However, in some
                circumstances we may be provided with information by third
                parties. In such a case we will take reasonable steps to ensure
                that you are made aware of the information provided to us by the
                third party.
            </p>
        </div>
    );
};

const Disclosure = () => {
    return (
        <div>
            <h2 className="privacyHeadings">
                Disclosure of Personal Information
            </h2>
            <p className="privacyText">
                Your Personal Information may be disclosed in a number of
                circumstances including the following: <br /> <br />• Third
                parties where you consent to the use or disclosure; and <br />•
                Where required or authorised by law.
            </p>
        </div>
    );
};

const Security = () => {
    return (
        <div>
            <h2 className="privacyHeadings">
                Security of Personal Information
            </h2>
            <p className="privacyText">
                Your Personal Information is stored in a manner that reasonably
                protects it from misuse and loss and from unauthorized access,
                modification or disclosure. When your Personal Information is no
                longer needed for the purpose for which it was obtained, we will
                take reasonable steps to destroy or permanently de-identify your
                Personal Information. However, most of the Personal Information
                is or will be stored in client files which will be kept by us
                for a minimum of 7 years.
            </p>
        </div>
    );
};

const Access = () => {
    return (
        <div>
            <h2 className="privacyHeadings">
                Access to your Personal Information
            </h2>
            <p className="privacyText">
                You may access the Personal Information we hold about you and to
                update and/or correct it, subject to certain exceptions. If you
                wish to access your Personal Information, please contact us in
                writing at {EMAIL}. Online PDF Manager will not charge any fee
                for your access request, but may charge an administrative fee
                for providing a copy of your Personal Information. In order to
                protect your Personal Information we may require identification
                from you before releasing the requested information.
            </p>
        </div>
    );
};

const Quality = () => {
    return (
        <div>
            <h2 className="privacyHeadings">
                Maintaining the Quality of your Personal Information{" "}
            </h2>
            <p className="privacyText">
                It is an important to us that your Personal Information is up to
                date. We will take reasonable steps to make sure that your
                Personal Information is accurate, complete and up-to-date. If
                you find that the information we have is not up to date or is
                inaccurate, please advise us as soon as practicable so we can
                update our records and ensure we can continue to provide quality
                services to you.
            </p>
        </div>
    );
};

const Updates = () => {
    return (
        <div>
            <h2 className="privacyHeadings">Policy Updates</h2>
            <p className="privacyText">
                This Policy may change from time to time and is available on our
                website.
            </p>

            <h2 className="privacyHeadings">
                Privacy Policy Complaints and Enquiries
            </h2>
            <p className="privacyText">
                If you have any queries or complaints about our Privacy Policy
                please contact us at: <br />
                <br />
                {EMAIL}
            </p>
        </div>
    );
};

class PrivacyPolicy extends React.PureComponent {
    render() {
        return (
            <div className="privacyBox">
                <h1
                    className="privacyHeadings"
                    style={{ textAlign: "center", fontSize: "2em" }}
                >
                    PRIVACY POLICY
                </h1>
                <Welcome />
                <WhatWeCollect />
                <SensitiveInformation />
                <ThirdParties />
                <Disclosure />
                <Security />
                <Access />
                <Quality />
                <Updates />
            </div>
        );
    }
}

export default PrivacyPolicy;
