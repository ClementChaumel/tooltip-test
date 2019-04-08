import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHintFactory from 'react-hint'
import styled, { css } from 'styled-components'
import ReactTooltip from 'react-tooltip'
import { Manager, Reference, Popper } from 'react-popper';
import Text from './Text'
const ReactHint = ReactHintFactory(React)

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200vw;
  height: 200vh;
  background: #cacaca;
`;

const Handle = styled.p`
  height: 75px;
  width: 75px;
  font-size: 50px;
  background: white;
  border-radius: 50%;
  color: tomato;
  text-align: center;
  line-height: 75px;
  cursor: help;
`;

const Tooltip = styled.div`
  background: white;
  padding: 10px;
  border-radius: 10px;

  >p{
      color: tomato;
  }
`;

const TooltipContent = styled.div`
	background: white;
	border-radius: 3px;
	border: 1px solid blue;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
	box-sizing:border-box;
	padding: 25px;
	cursor: default;

    > h2 {
        margin-bottom: 10px;
        color: black;
    }
    > p, ul {
        &:not(:last-child){
            color: black;
            margin-bottom: 10px;
            display: inline-block;
        }
    }

	&:before{
		content: '';
		height: 20px;
		width: 20px;
		background-color: white;
        border-left: 1px solid blue;
        border-bottom: 1px solid blue;
		border-radius: 3px;
		position: absolute;
		top: 47%;
		left: -10px;
		transform: rotate(45deg);
	}
`;

const InfoBubble = styled.div`
    display: grid;
    grid-template-rows: 15px 1fr;

    &:before {
        content: '';
        justify-self: center;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid white;
        z-index: 1;
    }
`

const InfoBubble2 = styled.div`
    display: grid;
`

const NewOffersWrapper = styled.div`
    background: white;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    max-width: 300px;
`

const ScrollContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;

const Fleche = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 15px;
    border-color: white;
    border-width: 15px 0 15px 15px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    margin-left: 0;
    margin-right: 0;

    ${props =>
        ((props.orientation === 'right' || props.orientation === 'right-end') &&
            css`

            border-width: 15px 15px 15px 0;
            border-color: white;
            border-top-color: transparent;
            border-left-color: transparent;
            border-bottom-color: transparent;
            left: -15px;
            top: calc(50% - 15px);


        `) ||
        ((props.orientation === 'left' || props.orientation === 'left-end') &&
            css`
            border-width: 15px 0 15px 15px;
            border-color: white;
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            right: -15px;
            top: calc(50% - 15px);


        `) ||
        ((props.orientation === 'top' || props.orientation === 'top-end') &&
            css`
            margin: 0;
            border-width: 15px 15px 0 15px;
            border-color: white;
            border-left-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            bottom: -15px;
            left: calc(50% - 15px);

        `) ||
        ((props.orientation === 'bottom' || props.orientation === 'bottom-end') &&
            css`
            margin: 0;
            border-width: 0 15px 15px 15px;
            border-color: white;
            border-top-color: transparent;
            border-right-color: transparent;
            border-left-color: transparent;
            top: -15px;
            left: calc(50% - 15px);

        `)
        }
`;

class App extends PureComponent {

    state = {
      isOpen: false,
    }

    handleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    return (
        <ScrollContainer>
        <Container>
            <Manager>
                <Reference>
                    {({ ref }) => (
                        <Handle
                            onMouseEnter={this.handleOpen}
                            onMouseLeave={this.handleOpen}
                            ref={ref}
                        >
                            ?
                        </Handle>
                    )}
                </Reference>
                {(this.state.isOpen || true)&&
                <Popper
                    placement="auto"
                    modifiers={
                                {
                                    preventOverflow: { enabled: true },
                                    offset: {
                                        enabled: true,
                                        offset: '0, 20',
                                    },
                                }
                            }
                >
                    {({ ref, style, placement, arrowProps }) => (
                        <InfoBubble2 ref={ref} style={style} data-placement={placement}>
                            <NewOffersWrapper>
                                <Text large loud>
                                    Tu autem, Fanni, quod mihi {placement}
                                </Text>
                                <Text>
                                    Et est admodum mirum videre plebem innumeram mentibus ardore quodam infuso cum dimicationum curulium eventu pendentem. haec similiaque memorabile nihil vel serium agi Romae permittunt. ergo redeundum ad textum.
                                </Text>
                                <Text>
                                    Et est admodum mirum videre plebem innumeram mentibus ardore quodam infuso cum dimicationum curulium eventu pendentem. haec similiaque memorabile nihil vel serium agi Romae permittunt. ergo redeundum ad textum.
                                </Text>
                            </NewOffersWrapper>
                            <Fleche ref={arrowProps.ref} style={arrowProps.style} orientation={placement}/>
                        </InfoBubble2>
                    )}
                </Popper>
            }
            </Manager>
        </Container>
        </ScrollContainer>
    );
  }
}

export default App;
