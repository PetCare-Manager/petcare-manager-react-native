import * as Font from 'expo-font';

async function loadFonts() {
  try {
    await Font.loadAsync({
        'AfacadSemibold': require('../assets/fonts/AfacadFlux-SemiBold.ttf'),
        'AfacadRegular': require('../assets/fonts/AfacadFlux-Regular.ttf'),
    });
  } catch (error) {
    console.error('Error cargando fuentes:', error);
  }
}
