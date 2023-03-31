import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

// Screen imporations from src/screens
import { TabRoutes } from './tab.routes';
import { Auth } from '../screens/auth';
import { Login } from '../screens/auth/Login';

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Auth" component={Auth} />
      <Screen name="Login" component={Login} />
      <Screen name="Tabs" component={TabRoutes} />
    </Navigator>
  );
}
