import { COLORS, FONTS } from '@/src/constant/theme';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        animation: 'ios_from_right',
        headerStyle: {
          backgroundColor: COLORS.white2,
        },
        headerTitleAlign: 'left',
        headerTitleStyle: {
          color: COLORS.black1,
          ...FONTS.h3,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Trending Repos',
        }}
      />

      <Stack.Screen
        name="[id]"
        options={({ route }) => {
          const params = route.params as { name?: string };
          return {
            title: params?.name || 'Details',
            headerBackTitle: 'Back',
          };
        }}
      />
    </Stack>
  );
}
