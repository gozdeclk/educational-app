import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default function ProfileScreen() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    grade: '',
    joinDate: '',
    totalActivities: 0,
    completedLessons: 0,
    currentStreak: 0,
    totalPoints: 0
  });

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const savedUserData = await AsyncStorage.getItem('userData');
      const savedProfileData = await AsyncStorage.getItem('profileData');
      
      if (savedUserData) {
        const parsedData = JSON.parse(savedUserData);
        
        // Profil bilgileri girilmiş mi kontrol et
        if (savedProfileData) {
          const profileData = JSON.parse(savedProfileData);
          setUserData({
            name: profileData.name || 'Kullanıcı',
            email: parsedData.email || '',
            grade: profileData.grade || 'Belirtilmemiş',
            joinDate: new Date(parsedData.loginTime || Date.now()).toLocaleDateString('tr-TR', { 
              year: 'numeric', 
              month: 'long' 
            }),
            totalActivities: 0, // Başlangıçta 0
            completedLessons: 0, // Başlangıçta 0
            currentStreak: 0, // Başlangıçta 0
            totalPoints: 0 // Başlangıçta 0
          });
        } else {
          // Profil bilgileri girilmemişse ana sayfaya yönlendir
          router.replace('/(tabs)');
        }
      }
    } catch (error) {
      console.error('Kullanıcı bilgileri yüklenemedi:', error);
      router.replace('/(tabs)');
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      router.replace('/login');
    } catch (error) {
      console.error('Çıkış yapılırken hata:', error);
      router.replace('/login');
    }
  };

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Header Section */}
          <View style={styles.headerSection}>
            <View style={styles.profileImageContainer}>
              <Text style={styles.profileImage}>👤</Text>
            </View>
            <Text style={styles.userName}>{userData.name}</Text>
            <Text style={styles.userEmail}>{userData.email}</Text>
            <Text style={styles.userGrade}>{userData.grade}</Text>
          </View>

          {/* Stats Section */}
          <View style={styles.statsSection}>
            <Text style={styles.sectionTitle}>Aktivite İstatistikleri</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>{userData.totalActivities}</Text>
                <Text style={styles.statLabel}>Toplam Aktivite</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>{userData.completedLessons}</Text>
                <Text style={styles.statLabel}>Tamamlanan Ders</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>{userData.currentStreak}</Text>
                <Text style={styles.statLabel}>Günlük Seri</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>{userData.totalPoints}</Text>
                <Text style={styles.statLabel}>Toplam Puan</Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View style={styles.actionsSection}>
            <Text style={styles.sectionTitle}>Hızlı Erişim</Text>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => router.push('/selection' as any)}
            >
              <View style={styles.actionContent}>
                <Text style={styles.actionIcon}>🎯</Text>
                <View style={styles.actionTextContainer}>
                  <Text style={styles.actionTitle}>Öğrenme Araçları</Text>
                  <Text style={styles.actionSubtitle}>AI destekli öğrenme araçlarına git</Text>
                </View>
                <Text style={styles.actionArrow}>→</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.actionContent}>
                <Text style={styles.actionIcon}>📊</Text>
                <View style={styles.actionTextContainer}>
                  <Text style={styles.actionTitle}>Detaylı İstatistikler</Text>
                  <Text style={styles.actionSubtitle}>Öğrenme geçmişini incele</Text>
                </View>
                <Text style={styles.actionArrow}>→</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.actionContent}>
                <Text style={styles.actionIcon}>⚙️</Text>
                <View style={styles.actionTextContainer}>
                  <Text style={styles.actionTitle}>Ayarlar</Text>
                  <Text style={styles.actionSubtitle}>Hesap ve uygulama ayarları</Text>
                </View>
                <Text style={styles.actionArrow}>→</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  profileImage: {
    fontSize: 50,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  userEmail: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 4,
  },
  userGrade: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
  statsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  statCard: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 16,
    padding: 20,
    width: '48%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
  },
  actionsSection: {
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  actionTextContainer: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
  actionArrow: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.6)',
  },
  logoutButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
}); 