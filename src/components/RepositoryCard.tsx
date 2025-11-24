import { COLORS, FONTS, SIZES } from '@/src/constant/theme';

import { GitHubRepository } from '@/src/types/GithubProps';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';

import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = Pick<
  GitHubRepository,
  'id' | 'name' | 'description' | 'owner' | 'stargazers_count'
> & {
  index: number;
};

const RepositoryCard: React.FC<Props> = ({
  id,
  name,
  description,
  owner,
  stargazers_count,
  index,
}) => {
  const router = useRouter();

  const formatStars = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }

    return count.toString();
  };

  const handlePress = () => {
    router.push({
      pathname: '/(trending)/[id]',
      params: {
        id: id.toString(),
        name,
        description,
        ownerName: owner.login,
        ownerAvatar: owner.avatar_url,
        repoStars: formatStars(stargazers_count),
      },
    });
  };

  return (
    <TouchableOpacity
      style={[styles.cardContainer, index === 0 && { borderTopWidth: 1 }]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text style={styles.itemName}>{name}</Text>

      <Text style={styles.itemDescription}>{description || ''}</Text>

      <View style={styles.footer}>
        <View style={styles.ownerContainer}>
          {owner.avatar_url ? (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: owner.avatar_url }}
                style={styles.avatarImage}
                resizeMode="cover"
              />
            </View>
          ) : (
            <View style={styles.iconContainer}>
              <FontAwesome6
                name="mountain-sun"
                size={14}
                color={COLORS.icon1}
              />
            </View>
          )}

          <Text style={styles.ownerName}>{owner.login}</Text>
        </View>

        <View style={styles.starsContainer}>
          <FontAwesome name="star" size={14} color={COLORS.black1} />
          <Text style={styles.starsCount}>{formatStars(stargazers_count)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RepositoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: 16,
    paddingHorizontal: SIZES.padding,
    borderColor: COLORS.white3,
    borderBottomWidth: 1,
  },

  itemName: {
    color: COLORS.black1,
    marginBottom: 8,
    ...FONTS.h3,
  },

  itemDescription: {
    color: COLORS.black1,
    marginBottom: 12,
    ...FONTS.m4,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ownerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  ownerName: {
    color: COLORS.black1,
    ...FONTS.p4,
  },

  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  imageContainer: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightgrey,
  },

  avatarImage: {
    width: '100%',
    height: '100%',
  },

  starsCount: {
    color: COLORS.black1,
    ...FONTS.p4,
  },
});
