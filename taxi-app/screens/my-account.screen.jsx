import { Text, Button, View, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
const MyAccount = () => {
    const nav = useNavigation();
    return (
       <View>
           <Text>My Account</Text>
           <Pressable
                    
                style={{color: 'white', height: 50, backgroundColor: '#6D3D59', padding: 10, borderRadius: 5, marginTop: 10 }} 
                onPress={() => {
                    nav.navigate('Home', { screen: 'request', params: { screen: 'request' }  });
            }} 
                
           />
       </View>
    );
}

export default MyAccount;