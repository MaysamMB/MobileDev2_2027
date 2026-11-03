import { Text, Button, View, Pressable, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
const MyAccount = () => {
    const nav = useNavigation();
    return (
       <View style={[styles.container]}>
            <View style={[styles.title_dev]}>
                <Text style={[styles.title]}>My Account</Text>

            </View>
           <Pressable
                    
                style={[styles.back_btn]} 
                onPress={() => {
                    nav.navigate('Home', { screen: 'request', params: { screen: 'request' }  });
            }} 
            
                
           >
            <Text style={[styles.btnText]}>Go Home</Text>
           </Pressable>
       </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F5F2',
        marginTop: 20,
    },
    title_dev: {
        padding: 20,
        alignItems: 'flex-start',
        marginTop: 40,
    },
    title: {
        color: "#6D3D59",
        fontSize: 20,
        fontWeight: 'bold',

    },
    back_btn: {
        color: 'white',
        height: 50, 
        backgroundColor: '#6D3D59', 
        padding: 10, 
        borderRadius: 5, 
        marginTop: 10,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',  
        marginLeft: 20, 
    }, 
    btnText: {
        color: "white",
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});
export default MyAccount;