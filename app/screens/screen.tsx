import {Dimensions} from "react-native";
import {YStack} from "tamagui";
import React from "react";

type ScreenProps = React.PropsWithChildren<React.ComponentProps<typeof YStack>>

export default (props: ScreenProps) => {
    return <YStack position={'relative'}
                   flex={1}
                   backgroundColor={'#111'}
                   paddingHorizontal={'$2'}
                   paddingTop={'$4'}
                   maxWidth={Dimensions.get('window').width}
                   minWidth={Dimensions.get('window').width}
                   maxHeight={Dimensions.get('window').height - 75}
                   height={Dimensions.get('window').height - 75}>
        {props.children}
    </YStack>
}
