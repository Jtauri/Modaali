import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';

export default function App() {

  const [modalVisibility, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show modal message</Text>
      </Pressable>
      <Modal
        animationType="fade"
        visible={modalVisibility}
        onRequestClose={() => {
          setModalVisible(!modalVisibility);
        }}
      >
        <View style={styles.modalbox}>
          <Text style={styles.paddedbottomtext}>This is a modal...</Text>
          <Pressable onPress={() => setModalVisible(!modalVisibility)}>
            <Text>Close Modal</Text>
          </Pressable>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  modalbox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 100,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f3f3f3',
    elevation: 5,
  },
  paddedbottomtext: {
    paddingBottom: 40,
  },
});
