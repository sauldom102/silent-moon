import { Linking, Alert, StatusBar } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { colors } from 'theme';
import { removePrefix } from 'utils/prefix';

const openWebLink = async (url: string, allowInsecure = false) => {
  try {
    if (await InAppBrowser.isAvailable()) {
      let formattedUrl = url;
      if (
        !url.startsWith('https://') ||
        (!allowInsecure && url.startsWith('http://'))
      ) {
        formattedUrl = `https://${removePrefix({
          text: url,
          prefix: 'http://',
        })}`;
      }

      const entry = StatusBar.pushStackEntry({
        barStyle: 'light-content',
      });

      await InAppBrowser.open(formattedUrl, {
        // iOS Properties
        navigationBarColor: colors.white,
        dismissButtonStyle: 'close',
        preferredBarTintColor: '#03174C',
        preferredControlTintColor: colors.white,
        animated: true,
        modalPresentationStyle: 'overFullScreen',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: '#03174C',
        secondaryToolbarColor: '#03174C',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
      });
      StatusBar.popStackEntry(entry);
    } else {
      Linking.openURL(url);
    }
  } catch (error: any) {
    if (error.message === 'Another InAppBrowser is already being presented.') {
      await InAppBrowser.close();
      Alert.alert('Something went wrong. Please, try it again.');
    } else {
      Alert.alert(error.message);
    }
  }
};

export default openWebLink;
