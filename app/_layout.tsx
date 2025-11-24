import { COLORS, FONTS } from '@/src/constant/theme';
import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.white2,
        },
        headerStyle: {
          backgroundColor: COLORS.white2,
        },
        headerTitleStyle: {
          color: COLORS.black1,
          ...FONTS.h3,
        },
      }}
    >
      <Tabs.Screen
        name="(trending)"
        options={{
          headerShown: false,
          title: 'Trending',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="star" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
