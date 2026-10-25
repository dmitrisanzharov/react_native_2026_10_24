import { Stack } from 'expo-router';

export default function RootLayout() {
    console.log('stack');

    return (
        <Stack
            screenOptions={{
                // headerShown: false,
                headerStyle: {
                    backgroundColor: 'red'
                },
                headerTintColor: '#fff', // Back button and icons
                headerTitleStyle: {
                    color: 'yellow' // Header title
                }
            }}
        >
            <Stack.Screen name='about' options={{ title: 'omg its about ' }} />
            <Stack.Screen name='bar' options={{ title: 'bar man hits oh yeah!', headerShown: true }} />
            {/* <Stack.Screen name='tabs-example' /> */}
        </Stack>
    );
}
