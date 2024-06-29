import React, { Suspense } from 'react'
export const dynamic = 'force-dynamic'
export default function layout({ children }) {
    return (
        <>
            <Suspense>
                {children}
            </Suspense>
        </>
    )
}