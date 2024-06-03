import { useLoaderData } from '@remix-run/react';
import { Suspense } from 'react';

import Button from 'app2/button';

export function loader() {
  return { message: 'Hello, World!' };
}

export default function Home() {
  const { message } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Home</h1>
      <p>{message}</p>
      <Suspense fallback={'loading remote'}>
        <Button />
      </Suspense>
    </div>
  );
}
