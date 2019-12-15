import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Container, Content, CardItem, Body, Text } from 'native-base';

export default class InsuranceCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{ flex: 0.5, padding: 5 }}>
				<Card>
					<CardItem>
						<Text style={styles.cardTitle}>{this.props.title}</Text>
					</CardItem>
					<CardItem>
						<Body>
							<Text style={styles.cardText}>
								{this.props.benefits}
							</Text>
							<Text style={styles.cardCompany}>
								{this.props.company}
							</Text>
						</Body>
					</CardItem>
				</Card>
			</View>
		);
	}
}

{
	/* <View style={this.props.position}>
        <Text style={styles.cardTitle}> {this.props.title} </Text>
        <Text style={styles.cardText}> {this.props.benefits} </Text>
        <Text style={styles.cardCompany}> {this.props.company} </Text>
    </View> */
}

/* flexWrap: 'wrap',
    alignItems: 'flex-start' */

const styles = StyleSheet.create({
	cardContainerRight: {
		backgroundColor: '#f00',
		borderColor: '#f00',
		borderRadius: 10,
		alignSelf: 'flex-start'
	},
	cardContainerLeft: {
		flex: 0.4,
		borderColor: '#f00',
		borderRadius: 2,
		alignSelf: 'flex-end'
	},
	cardTitle: {
		fontSize: 18
	},
	cardText: {
		fontSize: 12
	},
	cardCompany: {
		color: '#ddd',
		fontSize: 10
	}
});
