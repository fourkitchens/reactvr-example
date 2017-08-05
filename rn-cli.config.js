const path = require('path');
const blacklist = require('./node_modules/react-native/packager/blacklist');

function getRoots() {
  const root = process.env.REACT_NATIVE_APP_ROOT;
  if (root) {
    return [path.resolve(root)];
  }
  return [path.resolve(__dirname)];
}

const config = {
  getProjectRoots() {
    return getRoots();
  },

  getBlacklistRE() {
    return blacklist([]);
  },

  getAssetExts() {
    return ['obj', 'mtl'];
  },

  getPlatforms() {
    return ['vr'];
  },

  getProvidesModuleNodeModules() {
    return ['react-native', 'react-vr'];
  },
};

module.exports = config;
