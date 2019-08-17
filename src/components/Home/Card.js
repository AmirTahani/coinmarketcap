// @flow
import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

type Props = {
    currency: Object
};

const Wrapper = styled.View`
  height: 80px;
  border: 1px solid #858585;
  flex-direction: row;
  justify-content: space-between;
  background-color: #314053;
  border-radius: 4px;
  padding: 20px;
  margin: 10px 15px;
  elevation: 5;
`;

const ChangeWrapper = styled.View`
  justify-content: center;
`;
const Text = styled.Text`
  color: #fff;
  line-height: 22px;
`;

const ChangeText = styled.Text`
  color: ${props => props.change > 0 ? '#44e25d' : '#ff5945'}
`;
export default (props: Props) => {
    const { currency } = props;
    // circulating_supply: 17157995.1497376
    // cmc_rank: 10
    // date_added: "2014-05-21T00:00:00.000Z"
    // id: 328
    // last_updated: "2019-08-16T18:33:02.000Z"
    // max_supply: null
    // name: "Monero"
    // num_market_pairs: 132
    // platform: null
    // quote: {USD: {…}}
    // slug: "monero"
    // symbol: "XMR"
    // tags: ["mineable"]
    // total_supply: 17157995.1497376

    const key = key => key.split('_').join(' ');
    return (
        <Wrapper>
            <View>
                <Text>{key(currency.name)}</Text>
                <Text>{currency.quote.USD.price.toFixed(3)} $</Text>
            </View>
            <ChangeWrapper>
                <ChangeText
                    change={currency.quote.USD.percent_change_24h}
                >
                    {currency.quote.USD.percent_change_24h}%
                </ChangeText>
            </ChangeWrapper>
        </Wrapper>
    );
};
