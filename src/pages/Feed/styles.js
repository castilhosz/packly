import { StyleSheet } from 'react-native';

const styled = StyleSheet.create({
  packageUpdateContainer: {
    marginHorizontal: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderColor: '#E8E8E8', 
    marginVertical: 15,
  },
  packageUpdateContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  packageUpdateContainer3: {
    justifyContent: 'space-between',
    right: 150,
    paddingVertical: 5,
  },
  packageUpdateTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000',
    alignSelf: 'center',
    paddingHorizontal: 20
  },
  packageUpdateText1: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000',
  },
  packageUpdateText2: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    fontStyle: 'italic',
    color: '#9f9f9f',
  },
});

export const Box = styled.packageUpdateContainer;

export const BottomBox = styled.packageUpdateContainer2;

export const Description = styled.packageUpdateContainer3;

export const Title = styled.packageUpdateTitle;

export const City = styled.packageUpdateText1;

export const Date = styled.packageUpdateText2;

export const Time = styled.packageUpdateText2;

