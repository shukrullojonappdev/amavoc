import * as React from 'react'
import { StyleSheet } from 'react-native'
import { List, Surface } from 'react-native-paper'

// Interfaces
import { ListitemInterface, ListItemInterface } from '../interfaces'

const ListItemComponent = (props: ListitemInterface) => {
	return (
		<Surface style={styles.surface}>
			<List.Item title={props.title} onPress={() => console.log('hello')} />
		</Surface>
	)
}

export default ListItemComponent

const styles = StyleSheet.create({
	surface: {
		borderRadius: 5,
		marginVertical: 2
	}
})
