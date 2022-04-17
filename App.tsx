import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'

// components
import DrawerComponent from './components/DrawerComponent'

const App = () => {
	return (
		<NavigationContainer>
			<DrawerComponent />
		</NavigationContainer>
	)
}

export default App
