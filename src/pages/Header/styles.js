import { StyleSheet } from 'react-native';

const styled = StyleSheet.create({
  headerContainer: {
    width: 400,
    height: 130,
    backgroundColor: '#A500FF',
    paddingHorizontal: 10,
    paddingRight: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  headerText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#fff',
    left: 5,
  },
});

export const Title = styled.headerTitle;

export const Text = styled.headerText;

export const Container = styled.headerContainer;
