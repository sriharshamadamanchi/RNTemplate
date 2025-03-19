// @flow Copyright © 2019 Rently Softwares, All Rights Reserved
process.env.NODE_OPTIONS = '--max-old-space-size=8192'

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 * @type {import('@react-native/metro-config').MetroConfig}
*/
const config = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer")
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"]
  }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);