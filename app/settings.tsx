import SettingItemRow from '@/src/components/SettingItemRow';
import { COLORS, FONTS, SIZES } from '@/src/constant/theme';
import { createSettingsSections } from '@/src/data/settingsData';
import { SettingItem } from '@/src/types/Settings';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(false);

  const settingsSections = createSettingsSections(
    notificationsEnabled,
    setNotificationsEnabled,
    autoRefreshEnabled,
    setAutoRefreshEnabled
  );

  const handleItemPress = (item: SettingItem) => {
    if (item.type === 'link') {
      // Handle navigation or action
      console.log(`Pressed: ${item.label}`);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerIconContainer}>
          <FontAwesome name="cog" size={32} color={COLORS.black1} />
        </View>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {settingsSections.map((section, sectionIndex) => (
        <View key={sectionIndex} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.sectionContent}>
            {section.items.map((item, itemIndex) => (
              <SettingItemRow
                key={itemIndex}
                item={item}
                isLast={itemIndex === section.items.length - 1}
                onPress={handleItemPress}
              />
            ))}
          </View>
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Made with ❤️ for GitHub Repositories
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white1,
  },

  contentContainer: {
    paddingBottom: 40,
  },

  header: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: SIZES.padding,
  },

  headerIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.white2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  headerTitle: {
    color: COLORS.black1,
    ...FONTS.h2,
  },

  section: {
    marginBottom: 24,
    paddingHorizontal: SIZES.padding,
  },

  sectionTitle: {
    color: COLORS.darkgrey,
    marginBottom: 12,
    ...FONTS.m5,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  sectionContent: {
    backgroundColor: COLORS.white2,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },

  footer: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: SIZES.padding,
  },

  footerText: {
    color: COLORS.darkgrey,
    ...FONTS.p5,
    textAlign: 'center',
  },
});
