import { View, Image } from 'react-native'
import { useRef, useState, useEffect } from 'react'
import Style from './style'

const ListImage = () => {
  const [imgList, setImgList] = useState<{ uri: string }[]>([])
  let myInterval = useRef<any>(null)

  const imgUrl = 'https://dog.ceo/api/breeds/image/random'

  useEffect(() => {
    myInterval.current = setInterval(async () => {
      let response = await fetch(imgUrl)
      let json = await response.json();
      let tmpImg: { uri: string } = {
        uri: json.message
      }
      setImgList(imgList => [...imgList, tmpImg]);
    }, 3000);
  }, []);

  useEffect(() => {
    if (imgList.length >= 8) {
      clearInterval(myInterval.current);
      myInterval.current = null
    }
  }, [imgList]);

  let aliasImage = [];
  for (let i = 0; i < 8; i++) {
    aliasImage.push(<Image style={Style.image} source={imgList[i]} key={i} />)
  }

  return (
    <View>
      <View style={Style.listImages}>{aliasImage.slice(0, 2)}</View>
      <View style={Style.listImages}>{aliasImage.slice(2, 4)}</View>
      <View style={Style.listImages}>{aliasImage.slice(4, 6)}</View>
      <View style={Style.listImages}>{aliasImage.slice(6)}</View>
    </View>
  )
}

export default ListImage