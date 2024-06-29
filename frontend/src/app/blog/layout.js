import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'


export const metadata = {
    title: 'Limousine Blog',
    description: 'This is a limousine blog page',
}

export const dynamic = 'force-dynamic'

export default function layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}