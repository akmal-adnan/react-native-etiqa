import { COLORS, FONTS, SIZES } from '@/src/constant/theme';
import { SettingItem } from '@/src/types/Settings';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

type SettingItemRowProps = {
  item: SettingItem;
  isLast: boolean;
  onPress: (item: SettingItem) => void;
};

const SettingItemRow: React.FC<SettingItemRowProps> = ({
  item,
  isLast,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.settingItem, isLast && styles.lastItem]}
      onPress={() => onPress(item)}
      disabled={item.type === 'switch'}
      activeOpacity={item.type === 'link' ? 0.7 : 1}
    >
      <View style={styles.settingItemLeft}>
        <View style={styles.iconWrapper}>
          <FontAwesome name={item.icon} size={18} color={COLORS.icon1} />
        </View>
        <Text style={styles.settingLabel}>{item.label}</Text>
      </View>
      <View style={styles.settingItemRight}>
        {item.type === 'switch' ? (
          <Switch
            value={item.value}
            onValueChange={item.onToggle}
            trackColor={{
              false: COLORS.lightgrey,
              true: COLORS.blue1,
            }}
            thumbColor={COLORS.white1}
          />
        ) : item.type === 'info' ? (
          <Text style={styles.settingValue}>{item.value}</Text>
        ) : (
          <FontAwesome name="chevron-right" size={14} color={COLORS.icon1} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SettingItemRow;

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white3,
  },

  lastItem: {
    borderBottomWidth: 0,
  },

  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },

  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.white1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  settingLabel: {
    color: COLORS.black1,
    ...FONTS.m4,
  },

  settingItemRight: {
    alignItems: 'flex-end',
  },

  settingValue: {
    color: COLORS.darkgrey,
    ...FONTS.p4,
  },
});
