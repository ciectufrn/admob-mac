import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-2617758158623773/8264304764';

export default function Tela1({ navigation }) {

  const bannerRef = useRef(null);

  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  })

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>Tela1 (Banner)</Text>
        <StatusBar style="auto" />
        <Button
          title="Ir para Tela2 (IntertitialAd)"
          onPress={() => navigation.navigate('Tela2')}
        />
        <Button
          title="Ir para Tela3 (RewardedAd)"
          onPress={() => navigation.navigate('Tela3')}
        />
      </View>
      <View style={styles.bannerContainer}>
        <BannerAd ref={bannerRef} unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  bannerContainer: {
    alignItems: 'center',
  },
});
