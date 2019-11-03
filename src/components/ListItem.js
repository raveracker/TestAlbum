/* eslint-disable max-len */
import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation,
    UIManager,
    } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as action from '../actions';

class ListItem extends Component {
    componentDidUpdate() {
        // eslint-disable-next-line max-len
        // eslint-disable-next-line no-unused-expressions
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { lib, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1, }}>
                        {lib.item.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.lib.item;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        color: '#000',
    },
};

const mapStateToProps = (state, ownProps) => { 
    const expanded = state.selectedLibraryId === ownProps.lib.item.id;
    return { expanded };
};

export default connect(mapStateToProps, action)(ListItem);
