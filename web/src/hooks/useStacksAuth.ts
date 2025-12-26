import { useEffect, useState } from 'react';
import { UserSession } from '@stacks/connect';

export const useStacksAuth = () => {
    const [userSession] = useState(() => new UserSession());
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        if (userSession.isUserSignedIn()) {
            setUserData(userSession.loadUserData());
        }
    }, [userSession]);

    return { userSession, userData, setUserData };
};
