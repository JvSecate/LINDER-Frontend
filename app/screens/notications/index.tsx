import Screen from "../screen";
import {
    Avatar,
    Button,
    Circle,
    ListItem,
    Paragraph,
    ScrollView,
    Separator,
    Sheet,
    Square,
    XStack,
    YGroup,
    YStack
} from "tamagui";
import {CheckCheck, MailWarning, MoreVertical, X} from "@tamagui/lucide-icons";
import {NotificationModel} from "../../models/Notification";
import React, {useState} from "react";
import {useUser} from "../../hooks";


const WithoutNotification = () => {
    return <Screen>
        <YStack flex={1} bc={'$gray5'} ai={'center'} jc={'center'}>
            <MailWarning size={120} color={'$gray12'}/>
            <YStack ai={'center'} jc={'center'} w={'100%'}>
                <Paragraph size={'$9'} fontWeight={'bold'}>Você não possui</Paragraph>
                <Paragraph size={'$9'} fontWeight={'bold'}>Notificações</Paragraph>
            </YStack>
        </YStack>
    </Screen>
}

type NotificationMoreProps = React.ComponentProps<typeof Sheet> & {
    id
}

const NotificationMore = (
    {id, ...props}: NotificationMoreProps
) => {
    console.log(id)
    return <Sheet {...props} dismissOnSnapToBottom={true} snapPointsMode={"fit"}>
        <Sheet.Overlay/>
        <Sheet.Handle
            ai={'center'}
            jc={'center'}
            p={'$3'}
        >
            <Separator w={'80%'} bc={'$gray8'} p={"$1"}/>
        </Sheet.Handle>
        <Sheet.Frame>
            <YStack p={'$4'} space={'$4'}>
                <YGroup>
                    <YGroup.Item>
                        <ListItem
                            title={'Marcar como lida'}
                            iconAfter={<CheckCheck size={20}/>}
                            onPress={() => {
                                //  markAsRead(id)
                            }}
                        />
                    </YGroup.Item>
                    <YGroup.Item>
                        <ListItem
                            title={'Excluir notificação'}
                            iconAfter={<X size={20}/>}
                            bc={'$red3'}
                            onPress={() => {
                                //  markAsRead(id)
                            }}
                        />
                    </YGroup.Item>
                </YGroup>
            </YStack>
        </Sheet.Frame>
    </Sheet>
}

type NotificationItemProps = {
    notification: NotificationModel
    onMore: (id) => void
}

const NotificationSkeleton = () => {
    return <YStack p="$4" bc={'$gray4'} borderRadius="$2" space={'$2'}>
        <XStack width={'100%'} space={'$4'}>
            <Circle size={'$4'} bc={'$gray8'}/>
            <YStack flex={1} space={'$2'}>
                <Square width={'auto'} height={'$2'} bc={'$gray8'} borderRadius={5}/>
                <Square width={'auto'} height={128} bc={'$gray8'} borderRadius={5}/>
                <XStack jc={'flex-start'} ai={'flex-end'} width={'auto'}>
                    <Square width={'$10'} height={'$2'} bc={'$gray8'} borderRadius={5}/>
                </XStack>
            </YStack>
        </XStack>
    </YStack>
}

const NotificationItem = (
    {notification, onMore}: NotificationItemProps
) => {
    const [user, setUser] = React.useState(null)
    const loading = !user;

    React.useEffect(() => {
        async function loadUser() {
            setUser(await useUser());
        }

        loadUser()
    }, []);

    const more = React.useCallback(() => {
        onMore(notification.id)
    }, [notification]);

    if (loading) {
        return <NotificationSkeleton/>
    }

    const title = notification.title.length > 25 ? notification.title.substring(0, 22) + '...' : notification.title
    const description = notification.description.length > 150 ? notification.description.substring(0, 150) + '...' : notification.description
    const icon = notification.readAt ? <CheckCheck size={20}/> : <MailWarning size={20}/>

    return <YStack p="$4"
                   bc={'$gray3'}
                   borderRadius="$2"
                   minWidth={'auto'}
                   maxWidth={'100%'}>
        <YStack>
            <XStack ai={'center'} jc={'space-between'}>
                <Avatar circular>
                    <Avatar.Fallback backgroundColor={'$gray12'}/>
                </Avatar>
                <XStack jc={'space-between'} flex={1} paddingLeft={'$4'}>
                    <YStack>
                        <Paragraph size="$5" fontWeight={'bold'}>{title}</Paragraph>
                        <Paragraph size="$5">{new Date(notification.createdAt).toLocaleDateString()}</Paragraph>
                    </YStack>
                    <YStack pt={'$2'}>
                        <Button bc={'transparent'} size={'$1'} onPress={more}>
                            <MoreVertical size={20}/>
                        </Button>
                    </YStack>
                </XStack>
            </XStack>
            <Separator bc={'$gray8'} paddingVertical={0.7} mt={'$2'}/>
            <XStack jc={'flex-end'}>
                <YStack>
                    <YStack space>
                        <Paragraph size="$5" color={'$gray12'} pt={6}>{description}</Paragraph>
                        <XStack width={'100%'} jc={'flex-end'}>
                            <Button height={'fit'}
                                    bc={'$green6'}
                                    iconAfter={icon}
                            >
                                {icon && <Paragraph size="$5" color={'$gray12'} fontWeight={'500'}>
                                    Marcar como lida
                                </Paragraph>
                                }
                            </Button>
                        </XStack>
                    </YStack>
                </YStack>
            </XStack>
        </YStack>
    </YStack>
}

export const NotificationScreen = () => {
    const notifications: NotificationModel[] = [
        {
            id: 1,
            type: "job",
            title: "New job alert A new job has been posted that matches your preferences. A new job has been posted that matches your preferences. ",
            description: "A new job has been posted that matches your preferences. A new job has been posted that matches your preferences. A new job has been posted that matches your preferences. A new job has been posted that matches your preferences. A new job has been posted that matches your preferences. A new job has been posted that matches your preferences.A new job has been posted that matches your preferences.",
            createdAt: "2021-09-25T00:00:00.000000Z",
            updatedAt: "2021-09-25T00:00:00.000000Z",
            userId: 1,
        },
        {
            id: 2,
            type: 'message',
            title: "New message",
            description: "You have a new message from John Doe.",
            createdAt: "2021-09-25T00:00:00.000000Z",
            updatedAt: "2021-09-25T00:00:00.000000Z",
            userId: 1,
        },
        {
            id: 3,
            type: 'message',
            title: "New message",
            description: "You have a new message from John Doe.",
            createdAt: "2021-09-25T00:00:00.000000Z",
            updatedAt: "2021-09-25T00:00:00.000000Z",
            userId: 1,
        },
        {
            id: 2,
            type: 'message',
            title: "New message",
            description: "You have a new message from John Doe.",
            createdAt: "2021-09-25T00:00:00.000000Z",
            updatedAt: "2021-09-25T00:00:00.000000Z",
            userId: 1,
        },
        {
            id: 3,
            type: 'message',
            title: "New message",
            description: "You have a new message from John Doe.",
            createdAt: "2021-09-25T00:00:00.000000Z",
            updatedAt: "2021-09-25T00:00:00.000000Z",
            userId: 1,
        },
        {
            id: 2,
            type: 'message',
            title: "New message",
            description: "You have a new message from John Doe.",
            createdAt: "2021-09-25T00:00:00.000000Z",
            updatedAt: "2021-09-25T00:00:00.000000Z",
            userId: 1,
        },
        {
            id: 3,
            type: 'message',
            title: "New message",
            description: "You have a new message from John Doe.",
            createdAt: "2021-09-25T00:00:00.000000Z",
            updatedAt: "2021-09-25T00:00:00.000000Z",
            userId: 1,
        },
        {
            id: 2,
            type: 'message',
            title: "New message",
            description: "You have a new message from John Doe.",
            createdAt: "2021-09-25T00:00:00.000000Z",
            updatedAt: "2021-09-25T00:00:00.000000Z",
            userId: 1,
        },
        {
            id: 3,
            type: 'message',
            title: "New message",
            description: "You have a new message from John Doe.",
            createdAt: "2021-09-25T00:00:00.000000Z",
            updatedAt: "2021-09-25T00:00:00.000000Z",
            userId: 1,
        },

        {
            id: 2,
            type: 'message',
            title: "New message",
            description: "You have a new message from John Doe.",
            createdAt: "2021-09-25T00:00:00.000000Z",
            updatedAt: "2021-09-25T00:00:00.000000Z",
            userId: 1,
        },
        {
            id: 3,
            type: 'message',
            title: "New message",
            description: "You have a new message from John Doe.",
            createdAt: "2021-09-25T00:00:00.000000Z",
            updatedAt: "2021-09-25T00:00:00.000000Z",
            userId: 1,
        }, {
            id: 2,
            type: 'message',
            title: "New message",
            description: "You have a new message from John Doe.",
            createdAt: "2021-09-25T00:00:00.000000Z",
            updatedAt: "2021-09-25T00:00:00.000000Z",
            userId: 1,
        },
        {
            id: 3,
            type: 'message',
            title: "New message",
            description: "You have a new message from John Doe.",
            createdAt: "2021-09-25T00:00:00.000000Z",
            updatedAt: "2021-09-25T00:00:00.000000Z",
            userId: 1,
        },

    ];

    const hasNotification = true;
    const [more, setMore] = useState<number | null>(null);
    const onMoreOpenChange = (isOpen: boolean) => {
        console.log('onMoreOpenChange', isOpen)
        if (!isOpen) {
            setMore(null);
        }
    }

    if (!hasNotification) {
        return <WithoutNotification/>
    }

    const count = notifications.length <= 99 ? notifications.length : '99+';

    return <Screen>
        <YStack p="$2" space={'$2'}>
            <XStack paddingHorizontal="$4" paddingVertical="$2" bc={'$orange1'} w={'100%'}
                    jc={'space-between'}>
                <Paragraph size="$5" fontWeight={'bold'}>Notificações</Paragraph>
                <Circle
                    bc={'$orange8'}
                    size={35}
                >
                    <Paragraph size="$3" fontWeight={'bold'}>{count}</Paragraph>
                </Circle>
            </XStack>
            <ScrollView space={'$2'} w={'100%'}>
                {notifications.map(
                    (notification, index) => <NotificationItem key={index}
                                                               notification={notification}
                                                               onMore={setMore}/>
                )}
                <YStack height={75}/>
            </ScrollView>
        </YStack>
        {more && <NotificationMore open={!!more} id={more} onOpenChange={onMoreOpenChange}/>}
    </Screen>
}
