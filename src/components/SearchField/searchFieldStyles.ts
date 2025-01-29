import {StyleSheet} from 'react-native';

export const searchFieldStyles = StyleSheet.create({
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#F9FAFB',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    padding: 0,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#6B7280',
    marginLeft: 8,
  },
});
