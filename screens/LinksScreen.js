import React, { Component } from 'react';
import {
	Text,
	ScrollView,
	StyleSheet,
	View,
	TouchableOpacity,
	Linking
} from 'react-native';

import Card from '../components/InsuranceCard';

export default LinksScreen = () => {
	return (
		<View>
			<Text> adsa </Text>
		</View>
	);
};

const shareToWhatsApp = text => {
	Linking.openURL(`whatsapp://send?text=${text}`);
};

export default class LinksScreen extends Component {
	render() {
		return (
			<ScrollView>
				<View style={{ flexDirection: 'column' }}>
					<View style={styles.row}>
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
					</View>
					<View style={styles.row}>
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
					</View>
					<View>
						<TouchableOpacity
							onpress={() => shareToWhatsApp('TESTE')}
						>
							<Text> Compartilhar com amigos no whatsapp </Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		);
	}
}

LinksScreen.navigationOptions = {
	title: 'Planos de Seguro'
};

styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	}
});
