// @flow
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Card from '../../components/Home/Card';
import { connect } from 'react-redux';
import { Loading } from '../../components/kit';
import { load } from '../../redux/modules/crypto';


type Props = {
    currencies: Object
};

class Home extends Component<Props> {
    componentDidMount() {
        this.props.load();
    }

    render() {
        const { currencies } = this.props;
        console.log(currencies, 'this is');
        return (
            <View>
                <Loading
                    loaded={currencies.loaded}
                    loading={currencies.loading}
                >
                    <FlatList
                        data={currencies.data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <Card currency={item}/>}
                    />
                </Loading>
            </View>
        );
    }
}

export default connect(state => ({
    currencies: state.crypto.currencies,
}), {
    load,
})(Home);
