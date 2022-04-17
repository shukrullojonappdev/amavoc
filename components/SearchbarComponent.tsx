import * as React from 'react'
import { Searchbar } from 'react-native-paper'

// Interfaces
import { SearchbarInterface } from '../interfaces'

const SearchbarComponent = (props: SearchbarInterface) => {
	return (
		<Searchbar
			placeholder='Поиск'
			onChangeText={props.onChangeText}
			value={props.value}
		/>
	)
}

export default SearchbarComponent
