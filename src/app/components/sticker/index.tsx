import * as React from 'react';

interface ISticker {
    children: string;
    color: string;
    rotate?: number;
}

const Sticker: React.FC<ISticker> = ({ children, color, rotate }) => {
    const style: React.CSSProperties = {
        background: `linear-gradient(30deg, ${color}, #eee)`,
        transform: `rotate(${rotate}deg)`
    };

    return (
        <div className="sticker" style={style}>
            <div className="nail"></div>
            {children}
        </div>
    )
};

export default Sticker;