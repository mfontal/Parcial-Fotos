import React, { useLayoutEffect, useRef, useState } from 'react';

export const Foto = ({ foto }) => {
    const pRef = useRef();

    return (
        <>
            <div
                className="card"
                >
                <img
                    src={foto.url}
                    className="card-img-top"
                    alt="color"
                />
                <div className="card-body">
                    <h5 className="card-title">{foto.title}</h5>
                    <p className="card-text">
                        Id: {foto.id}
                    </p>
                    <p className="card-text">
                        Album ID: {foto.albumId}
                    </p>
                </div>
            </div>
            
        </>
    );
};
