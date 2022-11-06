import { styles } from "./styles"
import { banner } from "../.././assets/banner.png"
import { View, Image } from "react-native"

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.banner}
        source={banner}/>
    </View>
  )
}
