import * as React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { Appbar, List, Button } from 'react-native-paper'

// JSON
import DATA from '../MOCK_DATA.json'

// Interfaces
import { ListitemInterface, ListItemInterface } from '../interfaces'

// Components
import SearchbarComponent from '../components/SearchbarComponent'
import ListItemComponent from '../components/ListItemComponent'

const listItems: ListitemInterface[] = DATA

const MainScreen = () => {
	const [searchQuery, setSearchQuery] = React.useState('')

	const handleChange = (query: string) => setSearchQuery(query)

	return (
		<View style={styles.container}>
			<SearchbarComponent onChangeText={handleChange} value={searchQuery} />
			<List.Section>
				<ScrollView showsVerticalScrollIndicator={false}>
					{listItems.filter((listItem) => {
						if (searchQuery === '') {
							return listItem
						} else if (listItem.title.toLowerCase().includes(searchQuery.toLowerCase())) {
								return listItem
						}
						}).map((listItem, index) => (
							<ListItemComponent title={listItem.title} key={index} />
					))}
				</ScrollView>
			</List.Section>
		</View>
	)
}

export default MainScreen

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: .95
	},
})
