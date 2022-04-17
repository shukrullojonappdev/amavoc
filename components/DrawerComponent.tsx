import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

// Screens
import MainScreen from '../screens/MainScreen'
import AddWordScreen from '../screens/AddWordScreen'

const Drawer = createDrawerNavigator()

const DrawerComponent = () => {
	return (
		<Drawer.Navigator initialRouteName='Home'>
			<Drawer.Screen 
				name='Home' 
				component={MainScreen} 
				options={{
					title: 'Главная', 
					drawerIcon: ({color, size}) => (
						<Ionicons name='home' size={20} color='black' />
					)
				}} 
			/>
			<Drawer.Screen 
				name='AddWord' 
				component={AddWordScreen} 
				options={{
					title: 'Добавить слово', 
					drawerIcon: ({color, size}) => (
						<Ionicons name='add-circle' size={20} color='black' />
					)
				}} 
			/>
		</Drawer.Navigator>
	)
}

export default DrawerComponent
