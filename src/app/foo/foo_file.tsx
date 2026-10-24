import { router } from 'expo-router';
import { useEffect } from 'react';
import { Button, Text, View } from 'react-native';

type Props = {};

const Foo = (props: Props) => {
    function handleRedirect() {
        router.push('/about');
    }
    useEffect(() => {}, []);

    return (
        <View>
            <Text>Foo</Text>
            <Button title='redirect' onPress={handleRedirect} />
        </View>
    );
};

export default Foo;
