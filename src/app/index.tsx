import * as Device from 'expo-device';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
    console.log('console.log', Device);

    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <Link href='/about'>about link</Link>
            <Link href='/foo/foo_file'>foo</Link>
            <Link href='/blah'>blah</Link>
            <Link href='/bar'>bar</Link>
            <Link href='/(tabs)'>tabs</Link>
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
