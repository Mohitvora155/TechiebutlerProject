import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
  },
  headerView: {
    height: 100,
    backgroundColor: '#ccccd2',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    width: '100%',
    fontWeight: '700',
    marginBottom: 16,
  },
  bagIcon: {
    width: 20,
    height: 20,
    marginLeft: 'auto',
    marginBottom: 16,
    marginRight: 10,
  },
  dataContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.inputborderColor,
  },
  detailContainer: {
    marginVertical: 10,
    backgroundColor: colors.InputColor,
    marginHorizontal: 16,
    marginBottom: 26,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});
