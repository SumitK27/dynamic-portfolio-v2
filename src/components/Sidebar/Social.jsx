import React from "react";

const Social = ({ social }) => {
    return (
        <div className="art-ls-social">
            {social.map((media) => {
                return (
                    <a
                        href={media.url}
                        key={media.name}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={media.className} />
                    </a>
                );
            })}
        </div>
    );
};

export default Social;
