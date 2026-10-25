import { Tabs } from 'expo-router';

export default function Layout() {
    console.log('tabs');

    return (
        <Tabs>
            <Tabs.Screen name='index' />
            <Tabs.Screen name='omg' />
        </Tabs>
    );
}
