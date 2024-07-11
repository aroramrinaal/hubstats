import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        if (username) {
            try {
                const response = await axios.get(`https://hubstats-backend-f33e446c9e31.herokuapp.com/api/github/${username}`);
                setUserData(response.data);
                setError(null);
            } catch (err) {
                setError(null);
                setUserData(null);
            }
        }
    };

    fetchData();
  }, [username]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!userData) {
    return(<div className="flex min-h-[100dvh] flex-col items-center justify-center bg-black px-4 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-md text-center">
      <div className="flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent border-filthy" />
      </div>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground text-filthy">Loading...</h1>
      <p className="mt-4  text-2xl text-muted-foreground text-filthy">Please wait while we fetch the data.</p>
    </div>
  </div>);
  }

return (
    <div className="bg-black min-h-screen text-white">
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
                        <div>
                            <h1 className="lg:leading-tighter text-6xl text-filthy font-bold tracking-tighter">
                                GitHub User Information
                            </h1>
                        </div>
                        <div className="flex flex-col items-start space-y-4">
                            <h1 className="text-6xl font-bold text-filthy">{(userData as { name: string }).name}</h1>
                            <p className="text-lg text-hub-lightgrey">{(userData as { bio: string }).bio}</p>
                            <p className="text-lg">{(userData as { location: string }).location}</p>
                            <p className="text-lg">{(userData as { public_repos: number }).public_repos} public repositories</p>
                            <p className="text-lg">{(userData as { followers: number }).followers} followers</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
);
};

export default UserPage;
