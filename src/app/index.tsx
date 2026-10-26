import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { Link, useFocusEffect } from 'expo-router';
import React from 'react';
import { Button, Share, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Index() {
    console.log('Haptics', Haptics);
    console.log('clip', Clipboard);

    const [input, setInput] = React.useState('');

    React.useEffect(() => {
        console.log('index use effect ran');

        return () => console.log('index useEffect cleaned up');
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            console.log('index useFocusEffect refocused');

            return () => console.log('index useFocusEffect cleaned up');
        }, [])
    );

    async function handleVibrate() {
        console.log('vibrate pressed');

        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

        Share.share({ message: 'share the app' });

        Clipboard.setStringAsync('something got clip boarded');
    }

    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <Link href='/about'>about link</Link>
            <Link href='/foo/foo_file'>foo</Link>
            <Link href='/blah'>blah</Link>
            <Link href='/bar'>bar</Link>
            <Link href='/(tabs)'>tabs group</Link>
            <View style={{ marginTop: '10px' }}></View>
            <View style={{ border: '2px solid blue' } as any}>
                <TextInput value={input} onChangeText={setInput} />
            </View>
            <View
                style={{
                    height: 1,
                    backgroundColor: '#ccc',
                    width: '100%',
                    marginBottom: 5
                }}
            />
            <Button title='vibrate' onPress={handleVibrate} />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});
