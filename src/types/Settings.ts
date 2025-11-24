import { FontAwesome } from '@expo/vector-icons';

export type SettingItem =
  | {
      icon: keyof typeof FontAwesome.glyphMap;
      label: string;
      value: boolean;
      onToggle: (value: boolean) => void;
      type: 'switch';
    }
  | {
      icon: keyof typeof FontAwesome.glyphMap;
      label: string;
      value: string;
      type: 'info';
    }
  | {
      icon: keyof typeof FontAwesome.glyphMap;
      label: string;
      type: 'link';
    };

export type SettingsSection = {
  title: string;
  items: SettingItem[];
};
