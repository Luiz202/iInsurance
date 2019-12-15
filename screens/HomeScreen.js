import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function HomeScreen() {
	return (
		<View>
			<Text>a</Text>
		</View>
	);
}

/* import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
	Container,
	Header,
	Content,
	Form,
	Item,
	Input,
	Button
} from 'native-base';
export default class HomeScreen extends Component {
	render() {
		return (
			<View>
				<Form>
					<Text> idade aproximada do imovel </Text>
					<Item>
						<Input placeholder='Username' />
					</Item>
					<Text> Metragem </Text>
					<Item>
						<Input placeholder='Password' />
					</Item>
				</Form>
				
			</View>
		);
	}
} */

HomeScreen.navigationOptions = {
	title: 'Planos de Seguro'
};
