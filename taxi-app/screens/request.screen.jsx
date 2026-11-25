import { useNavigation } from '@react-navigation/native';
import RequestForm from '../components/requestForm/requestForm.jsx';
import { Alert } from 'react-native';
import { insertRequest, updateRequest } from '../utils/db';

const RequestScreen = () => {
  // const nav = useNavigation();

  const handleSubmit = (data) => {
    // nav.navigate('driving', { data })

    // true when id is null OR undefined
    const isNew = data.id == null;

    const result = isNew ? insertRequest(data) : updateRequest(data);

    const action = isNew ? 'submitted' : 'updated';
    if (result.changes > 0) {
      Alert.alert('Success', `Your request has been ${action} successfully`, [
        { text: 'OK' },
      ]);
    } else {
      Alert.alert('Error', `Failed to ${action} your request`, [
        { text: 'OK' },
      ]);
    }
  }

  return <RequestForm onSubmit={handleSubmit} />;
}

export default RequestScreen;