import { SettingsSection } from '@/src/types/Settings';

export const createSettingsSections = (
  notificationsEnabled: boolean,
  setNotificationsEnabled: (value: boolean) => void,
  autoRefreshEnabled: boolean,
  setAutoRefreshEnabled: (value: boolean) => void
): SettingsSection[] => [
  {
    title: 'Preferences',
    items: [
      {
        icon: 'bell',
        label: 'Notifications',
        value: notificationsEnabled,
        onToggle: setNotificationsEnabled,
        type: 'switch',
      },
      {
        icon: 'refresh',
        label: 'Auto Refresh',
        value: autoRefreshEnabled,
        onToggle: setAutoRefreshEnabled,
        type: 'switch',
      },
    ],
  },
  {
    title: 'About',
    items: [
      {
        icon: 'info-circle',
        label: 'App Version',
        value: '1.0.0',
        type: 'info',
      },
      {
        icon: 'github',
        label: 'GitHub',
        type: 'link',
      },
    ],
  },
  {
    title: 'Support',
    items: [
      {
        icon: 'question-circle',
        label: 'Help & Support',
        type: 'link',
      },
      {
        icon: 'file-text',
        label: 'Terms of Service',
        type: 'link',
      },
      {
        icon: 'lock',
        label: 'Privacy Policy',
        type: 'link',
      },
    ],
  },
];
