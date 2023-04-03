import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    marginHorizontal: 30,
  },
  screenTitle: {
    color: 'white',
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 80,
  },
  linearGradient: {height: screenHeight},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  errorText: {
    color: '#E33088',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 3,
  },
  buttonStyle: {
    borderRadius: 20,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
