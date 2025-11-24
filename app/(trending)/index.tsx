import RepositoryCard from '@/src/components/RepositoryCard';
import { COLORS, FONTS, SIZES } from '@/src/constant/theme';
import { useGitHubRepositories } from '@/src/hooks/useGitHubRepositories';
import { FlashList } from '@shopify/flash-list';
import { useCallback } from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function TrendingScreen() {
  const {
    repositories,
    isLoading,
    isLoadingMore,
    isRefreshing,
    error,
    handleLoadMore,
    handleRefresh,
  } = useGitHubRepositories();

  const handleEndReached = useCallback(() => {
    handleLoadMore();
  }, [handleLoadMore]);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={COLORS.blue1} />
        <Text style={styles.loadingText}>Loading repositories...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlashList
        data={repositories}
        renderItem={({ item, index }) => (
          <RepositoryCard {...item} index={index} />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            tintColor={COLORS.blue1}
            colors={[COLORS.blue1]}
          />
        }
        onEndReached={handleEndReached}
        onEndReachedThreshold={0}
        ListEmptyComponent={
          !isLoading && error ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.errorText}>{error}</Text>
              <Text style={styles.errorHint}>
                Pull down to refresh and try again
              </Text>
            </View>
          ) : null
        }
        ListFooterComponent={
          isLoadingMore ? (
            <View style={styles.footerContainer}>
              <ActivityIndicator size="small" color={COLORS.blue1} />
            </View>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white1,
  },

  listContent: {
    paddingBottom: 0,
  },

  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    marginTop: 16,
    color: COLORS.black1,
    ...FONTS.m4,
  },

  errorText: {
    color: COLORS.peach,
    ...FONTS.m4,
    textAlign: 'center',
    paddingHorizontal: SIZES.padding,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: SIZES.padding,
  },

  errorHint: {
    color: COLORS.darkgrey,
    ...FONTS.p4,
    textAlign: 'center',
    marginTop: 8,
  },

  footerContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
