import { Tabs } from 'expo-router';

export default function Layout() {
    console.log('tabs');

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'lightgray'
                },
                tabBarIcon: (options) => {
                    console.log('options: ', options);

                    return;
                }
            }}
        >
            <Tabs.Screen name='index' />
            <Tabs.Screen name='omg' />
        </Tabs>
    );
}
