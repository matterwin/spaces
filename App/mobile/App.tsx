import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './src/navigation/AuthNav';
import AppNav from './src/navigation/AppNav';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setLoading(false);
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  },[])

  return (
    <NavigationContainer>
      {user ? <AppNav /> : <AuthNav />}
    </NavigationContainer>
  );
}
