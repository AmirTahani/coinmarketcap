// @flow
import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';


type Props = {
    error: Object
};


const Wrapper = styled.View`
  background-color: #ffffff;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.07);
  position: absolute;
  top: 70px;
  left: 10px;
  right: 10px;
  width: 100%;
`;

const Alert = (props: Props) => {
    if (props.error.show) {
        return (
            <Wrapper>
                <Text>{props.error.message}</Text>
            </Wrapper>
        );
    }
    return null;
};


export default connect(state => ({
    error: state.error,
}))(Alert);
