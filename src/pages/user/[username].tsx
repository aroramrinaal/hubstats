import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import { Github, MapPin, Users, Book, Link as LinkIcon } from 'lucide-react';

interface UserData {
  name: string;
  login: string;
  bio?: string;
  avatar_url: string;
  location?: string;
  blog?: string;
  followers: number;
  following: number;
  public_repos: number;
}

const UserPage = () => {
    const router = useRouter();
    const { username } = router.query;
    const [userData, setUserData] = useState<UserData | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        if (username) {
          try {
            const response = await axios.get<UserData>(`https://hubstats-backend-f33e446c9e31.herokuapp.com/api/github/${username}`);
            setUserData(response.data);
            setError(null);
          } catch (err) {
            setError('Error fetching user data');
            setUserData(null);
          }
        }
      };
  
      fetchData();
    }, [username]);

    if (error) {
        return <p className="text-red-500 text-center mt-10">{error}</p>;
    }

    if (!userData) {
        return (
          <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-black px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent border-filthy" />
              </div>
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground text-filthy">Loading...</h1>
              <p className="mt-4 text-2xl text-muted-foreground text-filthy">Please wait while we fetch the data.</p>
            </div>
          </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <img src={userData.avatar_url} alt={userData.name} className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="md:col-span-2">
                        <h1 className="text-4xl font-bold mb-2">{userData.name}</h1>
                        <h2 className="text-xl text-gray-400 mb-4">@{userData.login}</h2>
                        {userData.bio && <p className="text-lg mb-6">{userData.bio}</p>}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center">
                                <MapPin className="mr-2" />
                                <span>{userData.location || 'Not specified'}</span>
                            </div>
                            <div className="flex items-center">
                                <LinkIcon className="mr-2" />
                                <a href={userData.blog} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                    {userData.blog || 'No website'}
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Users className="mr-2" />
                                <span>{userData.followers} followers · {userData.following} following</span>
                            </div>
                            <div className="flex items-center">
                                <Book className="mr-2" />
                                <span>{userData.public_repos} public repos</span>
                            </div>
                        </div>
                        <a
                            href={`https://github.com/${userData.login}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                        >
                            <Github className="mr-2" />
                            View GitHub Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
