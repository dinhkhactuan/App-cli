import {STORAGE_KEY} from '../../constants/StorageKey';
import {getData} from '../../services/storeData';
import {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  img: {
    width: 106,
    height: 106,
  },
  btn: {
    marginTop: 10,
    width: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 130,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
interface user {
  userName: string;
  passWord: string;
}

const Profile = ({navigation}: {navigation: any}) => {
  const [user, setUser] = useState<user>();
  useEffect(() => {
    const fetchData = async () => {
      // Giả lập lấy dữ liệu
      const result = await getData(STORAGE_KEY.USER);
      setUser(result);
    };

    fetchData();
  }, []);
  return (
    <View style={{padding: 14}}>
      <View style={{display: 'flex', alignItems: 'center', borderRadius: 100}}>
        <Image
          style={styles.img}
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s'}}
        />
      </View>
      <View>
        <Text>Tài khoản: {user?.userName}</Text>
        <Text>Mật khẩu: {user?.passWord ?? 'Chưa cập nhật'}</Text>
      </View>
    </View>
  );
};
export default Profile;
