import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile({ navigation }) {
    const github_usuario = navigation.getParam('github_usuario');
    return <WebView style={{ flex: 1}} source={{ uri: `https://github.com/${github_usuario}`}} />
}

export default Profile;