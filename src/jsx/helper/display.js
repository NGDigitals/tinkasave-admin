import Snackbar from 'react-native-snackbar';

export const Display = {

  showSnackBar: (text) => {
    Snackbar.show({
      text,
      duration: Snackbar.LENGTH_INDEFINITE,
      action: {
        text: 'DISMISS',
        textColor: 'orange',
        onPress: () => {},
      },
    });
  },

  hideSnackBar: () => {
    Snackbar.dismiss();
  },
};
