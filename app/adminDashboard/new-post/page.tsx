import NewPostForm from '@/app/components/NewPostsForm';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Create New Post',
};

export default function Page() {
    return(
        <>
       <NewPostForm />
        </>
    )
}