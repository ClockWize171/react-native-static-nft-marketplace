import { View, Text } from 'react-native'
import { useState } from 'react'

import { EtherPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [truncate, setTruncate] = useState(false)

  const handleLongText = () => {
    if (!truncate) {
      setText(data.description);
      setTruncate(true);
    } else {
      setText(data.description.slice(0, 100));
      setTruncate(false)
    }
  }
  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTiteSize={SIZES.font}
        />
        <EtherPrice price={data.price} />
      </View>
      <View style={{
        marginVertical: SIZES.extraLarge * 1.5
      }}>
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary,
        }}>
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            {text}
            {!truncate && '...'}
            <Text style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
            }}
              onPress={handleLongText}>
              {truncate ? ' Show Less' : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailDesc