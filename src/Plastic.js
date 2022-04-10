import React from "react";

const Plastic = (props) => {
    const mostMatched = props.data[0];
    const allLabels = props.data.map((elem) => elem.label);
    const sortedLabels = allLabels.sort((a, b) => a.localeCompare(b));
    return (
        <>
            <ul className="plastic">
                {sortedLabels.map((label) => (
                    <li key={label}>
                        <span>
                            <img
                                className={`img ${label === mostMatched.label ? "selected" : null}`}
                                src={`./images/${label}.jpeg`}
                                alt={label}
                            />
                            <p className="name">{label}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Plastic;
