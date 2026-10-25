import { Tabs } from 'expo-router';

export default function RootLayout() {
    console.log('tabs');

    return (
        <Tabs>
            <Tabs.Screen name='index' options={{ title: 'Home', tabBarLabel: 'Home' }} />
            <Tabs.Screen name='omg' options={{ title: 'OMG', tabBarLabel: 'OMG' }} />
        </Tabs>
    );
}
