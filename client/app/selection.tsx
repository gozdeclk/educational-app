import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function SelectionScreen() {
  const handleOptionSelect = (option: string) => {
    if (option === 'ai-learning') {
      // AI Öğrenme Günlüğüm sayfasına yönlendir
      router.push('/ai-learning' as any);
    } else if (option === 'ai-error-hunter') {
      // AI Hata Avcısı sayfasına yönlendir
      router.push('/ai-error-hunter' as any);
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
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>🚀</Text>
            </View>
            <Text style={styles.headerText}>
              Nereden İlerlemek İstersin?
            </Text>
            <Text style={styles.subHeaderText}>
              Senin için hazırladığımız özel öğrenme araçlarından birini seç
            </Text>
          </View>
          
          {/* Options Section */}
          <View style={styles.optionsSection}>
            {/* AI Öğrenme Günlüğüm */}
            <TouchableOpacity 
              style={styles.optionContainer}
              onPress={() => handleOptionSelect('ai-learning')}
            >
              <LinearGradient
                colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
                style={styles.optionGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.optionIconContainer}>
                  <Text style={styles.optionIcon}>📚</Text>
                </View>
                <Text style={styles.optionTitle}>AI Öğrenme Günlüğüm</Text>
                <Text style={styles.optionDescription}>
                  Yapay zeka destekli kişisel öğrenme günlüğün ile öğrenme sürecini takip et
                </Text>
                <View style={styles.arrowContainer}>
                  <Text style={styles.arrow}>→</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            {/* AI Hata Avcısı */}
            <TouchableOpacity 
              style={styles.optionContainer}
              onPress={() => handleOptionSelect('ai-error-hunter')}
            >
              <LinearGradient
                colors={['rgba(255,107,107,0.3)', 'rgba(238,90,36,0.2)']}
                style={styles.optionGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.optionIconContainer}>
                  <Text style={styles.optionIcon}>🔍</Text>
                </View>
                <Text style={styles.optionTitle}>AI Hata Avcısı</Text>
                <Text style={styles.optionDescription}>
                  Yazım hatalarını bul ve düzelt, yapay zeka ile öğrenme deneyimi yaşa
                </Text>
                <View style={styles.arrowContainer}>
                  <Text style={styles.arrow}>→</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Back Button */}
          <TouchableOpacity 
            style={styles.backButtonContainer}
            onPress={() => router.back()}
          >
            <LinearGradient
              colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
              style={styles.backButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.backButtonText}>← Geri Dön</Text>
            </LinearGradient>
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
    minHeight: '100%',
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 50,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
  icon: {
    fontSize: 40,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subHeaderText: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    lineHeight: 22,
  },
  optionsSection: {
    gap: 20,
    marginBottom: 30,
  },
  optionContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  optionGradient: {
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  optionIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    alignSelf: 'center',
  },
  optionIcon: {
    fontSize: 28,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  optionDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  arrowContainer: {
    alignItems: 'center',
  },
  arrow: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  backButtonContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  backButton: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 