import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import cat from "./assets/cat.png"
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import dog from "./assets/kucu.png"
import cady from "./assets/cady.png"


export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>

      <View style={{ flex: 1, flexDirection:"row", alignItems: "center", justifyContent: "space-between"}}>
        <View>
          <Text style={{fontSize: 40, color: "#1E306E", paddingLeft: 20, fontWeight: 500}}>Pety</Text>
          <Text style={{fontSize: 40, color: "#1E306E", paddingLeft: 20, fontWeight: 500}}>Veterinary</Text>
        </View>
        <View>
          <Image source={cat} style={{width:110, height:120}}></Image>
        </View>
        
      </View>


      <View style={{ flex: 2, backgroundColor: "#FFFFFF" }}>
        <View><Text style={{fontSize: 20, color: "#1E306E", paddingLeft: 20, fontWeight: 500}}>My Pets</Text></View>
        <View style={{flex: 1, flexDirection: "row"}}>

          <View style={{flex:1, borderRadius:20, margin:20, marginRight: 10, padding:20, borderWidth: 0.5, borderColor: "#816CFF" }}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={{fontSize: 20, color: "#1E306E", fontWeight:500}}>Titou</Text>
              <MaterialCommunityIcons name="gender-male" size={22} color="#1E306E"/>
            </View>
            <Text style={{color: "#1E306E"}}>1 year 6 month</Text>
            <Image source={dog} style={{width:"auto", height:130}}></Image>
          </View>

          <View style={{flex:1, borderRadius:20, margin:20, marginLeft: 10, padding:20, borderWidth: 0.5, borderColor: "#816CFF"}}>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={{fontSize: 20, color: "#1E306E", fontWeight:500}}>Cherry</Text>
              <MaterialCommunityIcons name="gender-female" size={22} color="#1E306E" />
            </View>
            <Text style={{color: "#1E306E"}} >2 years 4 month</Text>
            <Image source={cady} style={{width: "auto", height:130}}></Image>
          </View>

        </View>
      </View>


      <View style={{ flex: 3, backgroundColor: "#FFFFFF" }}>
        <View><Text style={{fontSize: 20, color: "#1E306E", paddingLeft: 20, fontWeight: 500}}>Services</Text></View>
        <View style={{flex: 1, flexDirection: "row"}}>
          <View style={{flex:1, margin:20, marginRight:10}}>

            <View style={{flex: 1, backgroundColor: "#816CFF", borderRadius:20, marginBottom:5}}>
              <View>
                <Text style={{fontSize: 20, fontWeight:500, color: "#FFFFFF", margin:10, marginTop:20, marginLeft: 20}}>Veterinarian</Text>
                <Text style={{color: "#D1C9FF", marginLeft: 20}}>Appointment at a veterinary clinic</Text>
              </View>
              <AntDesign name="arrowright" size={30}  color="#D1C9FF" style={{marginLeft:20, marginTop:30}} />
            </View>

            <View style={{flex: 1, backgroundColor: "#FFFFFF",borderRadius:20, borderWidth: 0.5, borderColor: "#816CFF", marginTop: 5}}>
              <View>
                <Text style={{fontSize: 20, fontWeight:500, color: "#1E306E", margin:10, marginTop:20, marginLeft: 20}}>Grooming</Text>
                <Text style={{color: "#1E306E", marginLeft: 20}}>View 46 salons in New York City</Text>
              </View>
              <AntDesign name="arrowright" size={30}  color="#D1C9FF" style={{marginLeft:20, marginTop:30}} />
            </View>

          </View>


          <View style={{flex:1, margin:20, marginLeft:10}}>

            <View style={{flex: 1, backgroundColor: "#FEDB92",borderRadius:20, marginBottom:5 }}>
            <View>
                <Text style={{fontSize: 20, fontWeight:500, color: "#1E306E", margin:10, marginTop:20, marginLeft: 20}}>Pet Hotels</Text>
                <Text style={{color: "#1E306E", marginLeft: 20 }}>View 27 hotels in New York City</Text>
              </View>
              <AntDesign name="arrowright" size={30}  color="#816CFF" style={{marginLeft:20, marginTop:30}} />
            </View>

            <View style={{flex: 1, backgroundColor: "#D1C9FF",borderRadius:20, marginTop: 5}}>
            <View>
                <Text style={{fontSize: 20, fontWeight:500, color: "#FFFFFF", margin:10, marginTop:20, marginLeft:20}}>Pet Shops</Text>
                <Text style={{color: "#FFFFFF", marginLeft: 20}}>View 73 shops in New York City</Text>
              </View>
              <AntDesign name="arrowright" size={30}  color="#FFFFFF" style={{marginLeft:20, marginTop:30}} />
            </View>
          </View>
          
        </View>
      </View>
     
    
    </View>
  );
}
