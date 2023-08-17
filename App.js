import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductStack from './src/tabSample/stack/ProductStack';
import ProfileStack from './src/tabSample/stack/ProfileStack';
// import { QueryClient, QueryClientProvider } from 'react-query'
// import SupplierPage from "./src/axiosSamples/SupplierPage";
// import LottieSample from "./src/lottieSample/LottieSample";
// import Customers from './src/reactquerysample/Customers';

// const queryClient = new QueryClient()

const Tab = createBottomTabNavigator();

export default function App() {


return <>
<NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Product" component={ProductStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
</NavigationContainer>
</>
{/* <QueryClientProvider client={queryClient}>
<Customers/>
</QueryClientProvider> */}

}