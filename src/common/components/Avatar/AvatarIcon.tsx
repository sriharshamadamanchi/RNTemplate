import * as React from 'react';
import { Avatar } from 'react-native-paper';

type AvatarIconPropsType = {
    icon: string;
    size?: number;
    color?: string;
    style?: any;
};

export const AvatarIcon = (props: AvatarIconPropsType) => {
    return (
        <Avatar.Icon {...props} />
    )
}