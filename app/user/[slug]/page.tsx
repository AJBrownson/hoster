import { NextPage } from 'next';

interface UserProps {
  params: {
    slug: string;
  };
}

const User: NextPage<UserProps> = ({ params }) => {
  return (
    <div>
      My slug is: {params.slug}
    </div>
  );
}; 
// below is comprehensive tutorial
// https://www.digitalocean.com/community/tutorials/create-dynamic-routes-in-next-js-with-route-guards-and-user-authentication

export default User;

// import Dashboard from './dashboard';

// export default function User() {
//   { params }: { params: { slug: string } }
//   return (
//     <div>
//       <h1>Welcome, {params.slug}!</h1>
//       <Dashboard />
//     </div>
//   );
// }
