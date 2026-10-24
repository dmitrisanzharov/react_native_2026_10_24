import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type Props = {};

const About = (props: Props) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <ScrollView>
                        <Text style={styles.main}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
                            cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                            sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
                            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
                            lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
                            Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
                            Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Nam nec ante. Sed
                            lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
                            turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus
                            consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu
                            magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus
                            vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum
                            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi lacinia
                            molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue
                            elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec,
                            blandit vel, egestas et, augue.
                        </Text>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default About;

const styles = StyleSheet.create({
    main: {
        color: 'green',
        fontSize: 50
    }
});
