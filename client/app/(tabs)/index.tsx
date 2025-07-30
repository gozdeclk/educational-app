import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');

  const grades = ['5. Sınıf', '6. Sınıf', '7. Sınıf', '8. Sınıf', '9. Sınıf', '10. Sınıf', '11. Sınıf', '12. Sınıf'];

  const handleContinue = () => {
    if (name && selectedGrade) {
      router.push('/selection' as any);
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
              <Text style={styles.icon}>🎓</Text>
            </View>
            <Text style={styles.headerText}>
              Eğitim Yolculuğuna Hoş Geldin!
            </Text>
            <Text style={styles.subHeaderText}>
              Sana özel içerikler için bilgilerini gir
            </Text>
          </View>
          
          {/* Form Section */}
          <View style={styles.formSection}>
            {/* Name Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Ad Soyad</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Adınızı ve soyadınızı girin"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  value={name}
                  onChangeText={setName}
                />
              </View>
            </View>

            {/* Grade Selection */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Sınıfınız</Text>
              <View style={styles.gradeContainer}>
                {grades.map((grade) => (
                  <TouchableOpacity
                    key={grade}
                    style={styles.gradeButtonOuter}
                    onPress={() => setSelectedGrade(selectedGrade === grade ? '' : grade)}
                    activeOpacity={0.85}
                  >
                    {selectedGrade === grade ? (
                      <LinearGradient
                        colors={['#667eea', '#764ba2']}
                        style={styles.gradeButton}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                      >
                        <Text style={styles.selectedGradeButtonText}>{grade}</Text>
                      </LinearGradient>
                    ) : (
                      <View style={styles.gradeButton}>
                        <Text style={styles.gradeButtonText}>{grade}</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Continue Button */}
            <TouchableOpacity 
              style={styles.continueButtonContainer}
              disabled={!name || !selectedGrade}
              onPress={handleContinue}
            >
              <View style={[styles.continueButton, (!name || !selectedGrade) && styles.continueButtonDisabled]}>
                <Text style={styles.continueButtonText}>
                  {(!name || !selectedGrade) ? 'Bilgileri Girin' : 'Devam Et'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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
  formSection: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 12,
  },
  inputContainer: {
    marginBottom: 28,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  inputWrapper: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 24,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  textInput: {
    padding: 18,
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  gradeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  gradeButtonOuter: {
    width: (width - 120) / 2,
    marginBottom: 12,
    borderRadius: 24,
  },
  gradeButton: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  gradeButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  selectedGradeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  continueButtonContainer: {
    marginTop: 24,
    borderRadius: 24,
    overflow: 'hidden',
    // shadow ve elevation kaldırıldı
  },
  continueButton: {
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 24,
    // shadow yok
  },
  continueButtonDisabled: {
    opacity: 0.7,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});
