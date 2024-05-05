import React, { useEffect, useState } from 'react';

function UserProfile() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
            .then(response => response.json())
            .then(data => setUserData(data.results[0]))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-white overflow-hidden">
            {userData && (
                <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row">
                    <div className="md:mr-8 mb-6 md:mb-0">
                        <img src={userData.picture.large} alt="User" className="rounded-full w-40 h-40" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">{`${userData.name.title}. ${userData.name.last}`}</h2>
                        <p className="text-gray-300 mb-2">{`Gender: ${userData.gender}`}</p>
                        <p className="text-gray-300 mb-2">{`Contact: ${userData.phone}`}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
