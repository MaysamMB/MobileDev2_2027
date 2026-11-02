import RequestForm from "../components/requestForm/requestForm";
import { useNavigation } from "@react-navigation/native";
const RequestScreen = () => {
    const nav = useNavigation();
    const HandleSubmit = (data) => {
        nav.navigate('driving', { screen: 'driving', params: { data: data }  });
    }
    return (
        <RequestForm onsubmit={HandleSubmit}/>
    );
}

export default RequestScreen;