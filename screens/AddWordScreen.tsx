import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'

const NewWordScreen = () => {
	return (
		<View style={styles.container}>
			<TextInput mode='flat' style={styles.textInput} />
		</View>
	)
}

export default NewWordScreen

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: .95
	},
	textInput: {
		height: 50
	}
})
