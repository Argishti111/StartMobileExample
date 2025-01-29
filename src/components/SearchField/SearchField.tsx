import React, {useState} from 'react';
import {
  Image,
  KeyboardTypeOptions,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {searchFieldStyles} from './searchFieldStyles';

type SearchFieldType = {
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  handleSearchPress: () => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  otherStyles?: any;
};

export function SearchField({
  value,
  placeholder,
  handleChangeText,
  keyboardType,
  handleSearchPress,
  ...props
}: SearchFieldType) {
  const [borderColor, setBorderColor] = useState('#FFF');
  const {input, inputContainerStyle, searchIcon} = searchFieldStyles;

  return (
    <View style={[inputContainerStyle, {borderColor}]}>
      <TextInput
        style={input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        onFocus={() => setBorderColor('lightgreen')}
        onBlur={() => setBorderColor('#FFF')}
        keyboardType={keyboardType}
        {...props}
      />
      <TouchableOpacity onPress={() => handleSearchPress()}>
        <Image
          source={require('../../assets/images/search.png')}
          style={searchIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
