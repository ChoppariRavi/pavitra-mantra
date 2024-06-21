/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#FA9300';
const tintColorDark = '#B10819';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#FA9300',
    tint: tintColorLight,
    icon: '#FFFFFF',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#B10819',
    tint: tintColorDark,
    icon: '#FFFFFF',
    tabIconDefault: '#577590',
    tabIconSelected: tintColorDark,
  },
};
