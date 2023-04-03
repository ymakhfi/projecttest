import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Formik} from 'formik';
import styles from './style';
import SignUpPresenter from './SignupPresenter';
import LinearGradient from 'react-native-linear-gradient';

interface SignUpScreenViewProps {
  presenter: SignUpPresenter;
}

interface SignUpFormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
}

const SignUpScreenView: React.FC<SignUpScreenViewProps> = ({presenter}) => {
  const handleSignUp = (values: SignUpFormValues) => {
    presenter.SignUp(values);
  };

  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={['#7901F5', '#6702C0', '#52018C']}>
      <ScrollView style={styles.container}>
        <Text style={styles.screenTitle}>Sign Up Screen</Text>

        <Formik
          initialValues={{
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
          }}
          validationSchema={presenter.validationSchema}
          onSubmit={handleSignUp}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }: any) => (
            <View>
              <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
              <TextInput
                style={styles.input}
                placeholderTextColor={'#858384'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder={'Email'}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholderTextColor={'#858384'}
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder={'Password'}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholderTextColor={'#858384'}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                placeholder={'First Name'}
              />
              {touched.firstName && errors.firstName && (
                <Text style={styles.errorText}>{errors.firstName}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholderTextColor={'#858384'}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                placeholder={'Last Name'}
              />
              {touched.lastName && errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholderTextColor={'#858384'}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                placeholder={'Phone Number'}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}

              <TextInput
                style={styles.input}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                placeholder={'Address'}
                placeholderTextColor={'#858384'}
              />
              {touched.address && errors.address && (
                <Text style={styles.errorText}>{errors.address}</Text>
              )}
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.buttonStyle}
                colors={['#FD00D1', '#E92C7E']}>
                <Button
                  color={'white'}
                  title="Sign up"
                  onPress={handleSubmit}
                />
              </LinearGradient>
            </View>
          )}
        </Formik>
      </ScrollView>
    </LinearGradient>
  );
};
export default SignUpScreenView;
