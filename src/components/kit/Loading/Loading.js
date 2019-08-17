// @flow
import React from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import styled from 'styled-components/native';

type Props = {
    loading: Boolean,
    loaded: Boolean
};

const { height } = Dimensions.get('window');

const Loading = styled.View`
  height: ${props => props.height};
  justify-content: center;
`;

export default (props: Props) => {
    if (props.loading && !props.loaded) {
        return (
            <Loading height={height}>
                <ActivityIndicator size={60}/>
            </Loading>
        );
    }
    return props.children;
};
