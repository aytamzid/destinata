import Header from '@/app/(app)/Header'
import DataTable from '@/components/Dashboard/DataTable'

export const metadata = {
    title: 'Laravel - Dashboard',
}

export const dynamic = 'force-dynamic'

const Dashboard = () => {
    return (
        <>
            <Header title="Dashboard" />
            <div className="py-12 text-black">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <DataTable />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
