import React from "react";

const KnowledgeList = ({ knowledge }) => {
    return (
        <ul className="art-knowledge-list p-15-0">
            {knowledge.map((know) => (
                <li key={know.name}>
                    {know.name}
                    <ul>
                        {know.items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

export default KnowledgeList;
