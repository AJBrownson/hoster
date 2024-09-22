import UpcomingPosts from '@/app/components/UpcomingPosts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Campaign',
};

export default function Page() {
    return(
        <>
        <UpcomingPosts />
        </>
    )
}