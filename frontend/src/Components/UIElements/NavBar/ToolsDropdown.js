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
            style={{
                display: "inline-flex",
                justifyContent: "left",
                alignItems: "left",
            }}
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
                style={{ textDecoration: "none", zIndex: "3" }}
            >
                <p className="navbarText">
                    Tools <RiArrowDropDownLine size={"1.2em"} />
                </p>
            </HashLink>

            {showTools && (
                <div className="toolsDropdown">
                    {menu.map((item, index) => (
                        <Link to={item.path} style={{ textDecoration: "none" }} key={"dropdown_tool_" + index}>
                            <div className="toolsDropdownItem toolsDropdownText">
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};
