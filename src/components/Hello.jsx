import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Hello(props) {
    const{ children, bang, style } = props;
    return (
        <View>
        <Text style={[styles.text, style]}>
            {`${children} ${bang ? 'succeed!' : 'fault...'}`}
        </Text>
        </View>
    );
}

Hello.propTypes = {
    children: string.isRequired,
    bang: bool,
    style: shape(),
};

Hello.defaultProps = {
    bang: false,
    style: null,
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16,

    },
});

export default Hello;
