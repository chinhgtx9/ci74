import React from 'react';

export default function Footer(props) {

    return (
        <>
            <div className="footer">
            <div className="total-list">
                {props.total} tasks left
            </div>
            <div className="adress">
                Mind List
            </div>
            </div>

        </>
    )
}