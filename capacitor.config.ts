
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.e5625f35c2ba4c7da0aae9d611ed654b',
  appName: 'Islamic Prayer Times',
  webDir: 'dist',
  server: {
    url: 'https://e5625f35-c2ba-4c7d-a0aa-e9d611ed654b.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Geolocation: {
      permissions: ["location"]
    }
  }
};

export default config;
