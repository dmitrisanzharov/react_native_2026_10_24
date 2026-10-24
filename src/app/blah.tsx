import { Button, Platform, Pressable, Text, TouchableOpacity, View } from 'react-native';

type Props = {};

const Blah = (props: Props) => {
    console.log(Platform);

    return (
        <>
            <Text>Blah</Text>
            <View style={{ border: '1px solid red' } as any}>
                <Button title='me' color='red' />
            </View>

            <View style={{ border: '1px solid blue' } as any}>
                <Pressable onLongPress={() => console.log('long press')} delayLongPress={1000}>
                    <Text>Long press</Text>
                </Pressable>

                <TouchableOpacity onLongPress={() => console.log('long press touchable')}>
                    <Text>Long press touchable</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Blah;
