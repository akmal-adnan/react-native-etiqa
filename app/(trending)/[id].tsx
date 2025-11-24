import { COLORS, FONTS, SIZES } from '@/src/constant/theme';
import { FontAwesome } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

type ParamsProps = {
  id: string;
  name: string;
  description: string;
  ownerName: string;
  ownerAvatar?: string;
  repoStars: string;
};

export default function TrendingDetailsScreen() {
  const { id, name, description, ownerName, ownerAvatar, repoStars } =
    useLocalSearchParams<ParamsProps>();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={{ uri: ownerAvatar }}
            style={{ width: 100, height: 100 }}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.repositoryName}>{name || 'Repository'}</Text>
        <Text style={styles.repositoryId}>ID: {id}</Text>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            {ownerAvatar ? (
              <Image
                source={{ uri: ownerAvatar }}
                style={styles.miniAvatar}
                resizeMode="cover"
              />
            ) : (
              <FontAwesome name="user" size={20} color={COLORS.icon1} />
            )}
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Owner</Text>
              <Text style={styles.infoValue}>{ownerName || 'N/A'}</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <FontAwesome name="star" size={20} color={COLORS.black1} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Stars</Text>
              <Text style={styles.infoValue}>{repoStars || '0'}</Text>
            </View>
          </View>
        </View>
      </View>

      {description && (
        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Description</Text>
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
        </View>
      )}

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <FontAwesome name="code-fork" size={16} color={COLORS.icon1} />
          <Text style={styles.footerText}>Open Source</Text>
        </View>
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
    padding: SIZES.padding,
    paddingBottom: 40,
  },

  header: {
    alignItems: 'center',
    marginBottom: 32,
    paddingTop: 16,
  },

  iconContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  repositoryName: {
    color: COLORS.black1,
    marginBottom: 8,
    textAlign: 'center',
    ...FONTS.h2,
  },

  repositoryId: {
    color: COLORS.darkgrey,
    ...FONTS.p4,
  },

  infoSection: {
    marginBottom: 24,
  },

  infoRow: {
    marginBottom: 16,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white2,
    borderRadius: SIZES.radius,
    gap: 16,
  },

  miniAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },

  infoContent: {
    flex: 1,
  },

  infoLabel: {
    color: COLORS.darkgrey,
    marginBottom: 4,
    ...FONTS.p5,
  },

  infoValue: {
    color: COLORS.black1,
    ...FONTS.m4,
  },

  descriptionSection: {
    marginBottom: 24,
  },

  sectionTitle: {
    color: COLORS.black1,
    marginBottom: 12,
    ...FONTS.h4,
  },

  descriptionBox: {
    backgroundColor: COLORS.white2,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
  },

  descriptionText: {
    color: COLORS.black1,
    ...FONTS.p4,
  },

  footer: {
    marginTop: 8,
  },

  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
  },

  footerText: {
    color: COLORS.darkgrey,
    ...FONTS.p5,
  },
});
