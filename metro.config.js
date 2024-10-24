const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

//necesario para manejar SVGs
const { resolver: defaultResolver } = getDefaultConfig(__dirname);

module.exports = withNativeWind(
  {
    transformer: {
      //transformador para SVGs
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      //soportar archivos SVG como módulos
      assetExts: defaultResolver.assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...defaultResolver.sourceExts, "svg"],
    },
  },
  {
    input: "./assets/css/_tailwind.css",
  }
);
