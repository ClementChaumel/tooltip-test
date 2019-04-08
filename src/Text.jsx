import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from './theme'

const StyledText = styled.p`
    display: ${props => (props.displayS ? 'inline' : 'none')};
    font-family: ${theme.sansPro};
    line-height: 1.4;
    color: ${props => (props.color ? props.color : theme.graphiteDarker)};
    font-size: 16px;
    text-align: ${props => (props.align ? props.align : 'left')};
    font-weight: ${props => (props.loud ? 'bold' : 'normal')};
    text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};

    > strong{
        font-weight: bold;
    }

    ${props =>
        props.micro &&
        css`
            font-size: 14px;
            line-height: 1.3;
        `}

    ${props =>
        props.large &&
        css`
            font-size: 20px;
        `}


    ${theme.mediaMediumPlus`
        display: ${props => (props.displayM ? 'inline' : 'none')};
        // TBD
    `}

    ${theme.mediaLargePlus`
        display: ${props => (props.displayL ? 'inline' : 'none')};
        font-size: 14px;
        line-height: 1.3;

        ${props =>
            props.micro &&
            css`
                font-size: 12px;
            `}

        ${props =>
            props.large &&
            css`
                font-size: 18px;
            `}
    `}

`

class Text extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        large: PropTypes.bool,
        micro: PropTypes.bool,
        white: PropTypes.bool,
        lighter: PropTypes.bool,
        darker: PropTypes.bool,
        blue: PropTypes.bool,
        loud: PropTypes.bool,
        uppercase: PropTypes.bool,
        right: PropTypes.bool,
        center: PropTypes.bool,
        display: PropTypes.array,
        dataTest: PropTypes.string,
    }

    render() {
        let color = theme.graphiteDarker
        if (this.props.white) {
            color = 'white'
        }
        if (this.props.lighter) {
            color = theme.graphite
        }
        if (this.props.darker) {
            color = theme.graphiteDarker
        }
        if (this.props.blue) {
            color = theme.turquoiseDarker
        }

        let align = 'left'
        if (this.props.right) {
            align = 'right'
        }
        if (this.props.center) {
            align = 'center'
        }

        return (
            <StyledText
                {...this.props}
                micro={this.props.micro}
                large={this.props.large}
                color={color}
                align={align}
                loud={this.props.loud}
                uppercase={this.props.uppercase}
                data-test={this.props.dataTest}
                displayS={!this.props.display || this.props.display[0] !== 0}
                displayM={!this.props.display || this.props.display[1] !== 0}
                displayL={!this.props.display || this.props.display[2] !== 0}
            >
                {this.props.children}
            </StyledText>
        )
    }
}

export default Text
