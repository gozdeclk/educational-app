import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleAuth = () => {
    if (!email || !password) {
      setError('Lütfen e-posta ve şifre girin.');
      return;
    }
    setError('');
  };

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</Text>
          <Text style={styles.subHeaderText}>
            {isLogin ? 'E-posta ve şifrenle giriş yap.' : 'Yeni bir hesap oluştur.'}
          </Text>
        </View>
        <View style={styles.formSection}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-posta</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.textInput}
                placeholder="E-posta adresi"
                placeholderTextColor="rgba(255,255,255,0.7)"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Şifre</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.textInput}
                placeholder="Şifre"
                placeholderTextColor="rgba(255,255,255,0.7)"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
          </View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <TouchableOpacity style={styles.authButton} onPress={handleAuth}>
            <Text style={styles.authButtonText}>{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.switchText}>
              {isLogin ? 'Hesabın yok mu? Kayıt Ol' : 'Zaten hesabın var mı? Giriş Yap'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 40,
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
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 24,
    padding: 32,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  inputWrapper: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 24,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    padding: 18,
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    width: width - 120,
  },
  authButton: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 24,
    padding: 18,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  authButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    opacity: 0.8,
    marginTop: 8,
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
    marginTop: -10,
  },
}); 