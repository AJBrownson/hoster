import RecentPosts from '@/app/components/Cards/recentPosts';
import TotalPosts from '@/app/components/Cards/totalPosts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Hoster | User Dashboard',
};

export default function Page() {
    return(
        <>
        <h1 className='text-xl md:text-2xl font-semibold mb-6'>Welcome, User</h1>
        <TotalPosts />
        <RecentPosts />
        </>
    )
}