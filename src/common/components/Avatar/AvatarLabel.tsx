import * as React from 'react';
import { Avatar, AvatarTextProps } from 'react-native-paper';
import { theme } from '../../theme';

interface AvatarLabelProps extends AvatarTextProps {
    // Label Style
    white?: boolean,
    secondary?: boolean,
    primary?: boolean,
    light?: boolean,
    regular?: boolean,
    medium?: boolean,
    semibold?: boolean,
    bold?: boolean,

    xs?: boolean,
    s?: boolean,
    m?: boolean,
    l?: boolean,
    xl?: boolean,
    xl20?: boolean,
    xl22?: boolean,
    xxl?: boolean,
    xxxl?: boolean,
    xxxl34?: boolean,
    xxxxl?: boolean,
    xl5?: boolean,
};


export const AvatarLabel = (props: AvatarLabelProps) => {

    const labelStyle = {
        fontSize: theme.fontSizes.l,
        color: theme.colors.font.primary,
        fontFamily: theme.fonts.medium
    };

    // Assign Font Colors based on type.
    props.white && (labelStyle.color = theme.colors.font.default);
    props.secondary && (labelStyle.color = theme.colors.font.secondary);
    props.primary && (labelStyle.color = theme.colors.font.primary);
    props.color && (labelStyle.color = props.color);

    // Set font Style
    props.light && (labelStyle.fontFamily = theme.fonts.light);
    props.regular && (labelStyle.fontFamily = theme.fonts.regular);
    props.medium && (labelStyle.fontFamily = theme.fonts.medium);
    props.semibold && (labelStyle.fontFamily = theme.fonts.semibold);
    props.bold && (labelStyle.fontFamily = theme.fonts.bold);

    // Easily Set Font Sizes
    props.xs && (labelStyle.fontSize = theme.fontSizes.xs);
    props.s && (labelStyle.fontSize = theme.fontSizes.s);
    props.m && (labelStyle.fontSize = theme.fontSizes.m);
    props.l && (labelStyle.fontSize = theme.fontSizes.l);
    props.xl && (labelStyle.fontSize = theme.fontSizes.xl);
    props.xl20 && (labelStyle.fontSize = theme.fontSizes.xl20);
    props.xl22 && (labelStyle.fontSize = theme.fontSizes.xl22);
    props.xxl && (labelStyle.fontSize = theme.fontSizes.xxl);
    props.xxxl && (labelStyle.fontSize = theme.fontSizes.xxxl);
    props.xxxl34 && (labelStyle.fontSize = theme.fontSizes.xxxl34);
    props.xxxxl && (labelStyle.fontSize = theme.fontSizes.xxxxl);
    props.xl5 && (labelStyle.fontSize = theme.fontSizes.xl5);

    return (
        <Avatar.Text label={props.label} size={props.size} labelStyle={[labelStyle, props.labelStyle]} style={props.style} />
    )
}