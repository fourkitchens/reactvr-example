import React, { Component } from 'react';
import {
  AppRegistry,
  Box,
  Cylinder,
  Sphere,
  Pano,
  Plane,
  View,
  Animated,
  SpotLight,
} from 'react-vr';

const AnimatedBox = Animated.createAnimatedComponent(Box);

class InitialScene extends Component {
  state = { boxRotation: new Animated.Value(0) };
  componentDidMount() {
    this.rotateOnce();
  }
  rotateTo = 360;
  /**
   * Rotate the cube back and forth
   */
  rotateOnce() {
    this.state.boxRotation.setValue(0);
    Animated.timing(this.state.boxRotation, {
      toValue: this.rotateTo,
      duration: 10000,
    }).start(() => this.rotateOnce());
    this.rotateTo = -this.rotateTo;
  }
  render() {
    return (
      <View>
        <Pano />
        <SpotLight
          style={{ transform: [{ translate: [-10, 20, 30] }] }}
          angle={90}
          intensity={1}
        />
        <AnimatedBox
          dimWidth={2}
          dimDepth={2}
          dimHeight={2}
          style={{
            color: '#4CC3D9',
            transform: [
              { translate: [-2, -4.5, -13] },
              { rotateY: this.state.boxRotation },
            ],
          }}
          lit
        />
        <Sphere
          style={{
            color: '#EF2D5E',
            transform: [{ translate: [0, -4.5, -20] }],
          }}
          heightSegments={50}
          radius={2.5}
          lit
        />
        <Cylinder
          radiusTop={1}
          radiusBottom={1}
          dimHeight={4}
          segments={50}
          style={{
            color: '#FFC65D',
            transform: [{ translate: [2, -4.5, -15] }],
          }}
          lit
        />
        <Plane
          dimWidth={13}
          dimHeight={13}
          style={{
            color: '#7BC8A4',
            transform: [{ translate: [0, -7.5, -20] }, { rotateX: -90 }],
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('reactvr_example', () => InitialScene);

export default InitialScene;
