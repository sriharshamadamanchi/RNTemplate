import * as React from 'react';
import { Avatar } from 'react-native-paper';
import {
    ImageProps,
    ImageSourcePropType,
} from 'react-native';

type AvatarImageSource =
    | ImageSourcePropType
    | ((props: { size: number }) => React.ReactNode);

type AvatarImagePropsType = {
    source: AvatarImageSource;
    size?: number;
    style?: any;
    onError?: ImageProps['onError'];
    onLayout?: ImageProps['onLayout'];
    onLoad?: ImageProps['onLoad'];
    onLoadEnd?: ImageProps['onLoadEnd'];
    onLoadStart?: ImageProps['onLoadStart'];
    onProgress?: ImageProps['onProgress'];
};

export const AvatarImage = (props: AvatarImagePropsType) => {
    return (
        <Avatar.Image {...props} />
    )
}