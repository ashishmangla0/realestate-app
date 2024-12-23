import { Link, router } from "expo-router";
import { Button, Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      {/* <Button onPress={()=>router.navigate('./signin')} title="signin"></Button>
      <Button onPress={()=>router.navigate('../../signup')} title="sign up"></Button> */}

      <Text className="font-bold text-lg my-10">Welcon as d</Text>
      <Text style={{ fontFamily: 'Rubik-Bold',fontSize:40 }}>ssdf</Text>

      <Link href={"/signin"}>signin</Link>
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/properties/121"}>Property sdf</Link>

    </View>
  );
}
