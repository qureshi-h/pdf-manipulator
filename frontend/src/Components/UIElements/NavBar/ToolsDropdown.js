import React from "react";
import { HashLink } from "react-router-hash-link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const menu = [
    { name: "Reorganise", path: "/reorganise" },
    { name: "Merge", path: "/merge" },
    { name: "PDF To Image", path: "/pdftoimage" },
    { name: "Image To PDF", path: "/imagetopdf" },
];

export const ToolsDropdown = () => {
    const [showTools, setShowTools] = React.useState(false);

    return (
        <div
            style={{ display: "inline-flex" }}
            onMouseEnter={() => {
                setShowTools(true);
            }}
            onMouseLeave={() => {
                setShowTools(false);
            }}
        >
            <HashLink
                to="/#tools"
                scroll={(el) =>
                    el.scrollIntoView({
                        behavior: "auto",
                        block: "start",
                    })
                }
            >
                <a className="navbarText">
                    Tools <RiArrowDropDownLine size={"1.2em"} />
                </a>
            </HashLink>

            {showTools && (
                <div className="toolsDropdown">
                    {menu.map((item) => (
                        <div className="toolsDropdownItem">
                            <a href={item.path} className="toolsDropdownText">
                                {item.name}
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
