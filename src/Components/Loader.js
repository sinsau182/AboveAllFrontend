// Loader.js
import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Spinner = styled.div`
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const Loader = () => (
    <LoaderWrapper>
        <Spinner />
    </LoaderWrapper>
);

export default Loader;
