import { useEffect } from 'react';
import { router } from 'expo-router';

export default function IndexScreen() {
  useEffect(() => {
    // Ana sayfa açıldığında direkt login sayfasına yönlendir
    router.replace('/login');
  }, []);

  return null;
} 