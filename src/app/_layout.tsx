import { Stack } from 'expo-router';

export default function RootLayout() {
    console.log('stack');

    return (
        <Stack
            screenOptions={{
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
        </Stack>
    );
}
