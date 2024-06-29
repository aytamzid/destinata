import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export const metadata = {
    title: 'Limousine Service',
    description: 'This is a limousine service website',
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
