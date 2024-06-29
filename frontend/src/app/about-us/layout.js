import React from 'react';


export const metadata = {
    title: 'Limousine About Us',
    description: 'This is a limousine about us page',
}

export const dynamic = 'force-dynamic'

const layout = ({ children }) => {
    return (
        <>
            <main>{children}</main>
        </>
    );
};

export default layout;