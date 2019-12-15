import React, { Component } from 'react';
import { Text, View, HorizontalScrollView, StyleSheet } from 'react-native';

import Card from '../components/InsuranceCard';
export default class SettingsScreen extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<View>
					<Text style={styles.h2}> Planos contratados: </Text>
					<View>
						<Text> ainda não há planos contratados </Text>
					</View>
				</View>
				<View style={styles.seconSection}>
					<Text> Planos: </Text>
					<HorizontalScrollView>
						<Card
							position={'cardPositionRight'}
							title={'Teste'}
							benefits={'teste teste teste teste'}
							company={'teste teste'}
						/>
						<Card
							position={'cardPositionRight'}
							title={'Teste'}
							benefits={'teste teste teste teste'}
							company={'teste teste'}
						/>
					</HorizontalScrollView>
				</View>
			</View>
		);
	}
}

SettingsScreen.navigationOptions = {
	title: 'Teste'
};

const styles = StyleSheet.create({
	wrapper: {}
});
