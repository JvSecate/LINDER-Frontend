import {
    Avatar,
    Button,
    H3,
    Image,
    Input,
    ListItem,
    Paragraph,
    ScrollView,
    Separator,
    Sheet,
    SizableText,
    TextArea,
    XStack,
    YGroup,
    YStack
} from "tamagui";
import Screen from "../screen";
import {UserModel} from "../../models";
import {ArrowBigDownDash, Camera, FileEdit, GalleryHorizontal, Pencil} from "@tamagui/lucide-icons";
import {usePhotoGallery, useUser} from "../../hooks";
import React from "react";

type UserProps = {
    user: UserModel
};

type EditPerfilProps = {
    user: UserModel
    open: boolean
    onClose: () => void
}

const EditPerfil = (
    {
        user,
        open,
        onClose
    }: EditPerfilProps
) => {

    const nameRef = React.useRef(null);
    const phoneRef = React.useRef(null);
    const perfilRef = React.useRef(null);
    const experienceRef = React.useRef(null);

    const onOpenChange = React.useCallback((isOpen) => {
        if (!isOpen) {
            onClose();
        }
    }, [onClose]);

    return <Sheet open={open}
                  snapPointsMode={"percent"}
                  onOpenChange={onOpenChange}
                  snapPoints={[90]}
    >
        <Sheet.Overlay
            animation="lazy"
            enterStyle={{opacity: 0}}
            exitStyle={{opacity: 0}}
        />
        <Sheet.Handle/>
        <Sheet.Frame>
            <YStack jc={"center"} ai={"center"} pt={"$2"}>
                <Button size="$2"
                        width={"$7"}
                        borderRadius="$6"
                        marginVertical="$2"
                        backgroundColor="$gray4"
                        onPress={onClose}
                >
                    <ArrowBigDownDash color={'white'} size={'$2'}/>
                </Button>
            </YStack>
            <Separator/>
            <Sheet.ScrollView>
                <YStack space={'$3'} p={"$3"}>
                    <XStack space={'$3'} jc={"space-between"} ai={"center"}>
                        <H3 color="$gray12">Editar Perfil</H3>
                        <Button
                            size="$4"
                            width={"$4"}
                            borderRadius="$6"
                            marginVertical="$2"
                            backgroundColor="$green10"
                        >
                            <FileEdit color={'white'} size={'$2'}/>
                        </Button>
                    </XStack>
                    <Paragraph color="$gray12" size={"$6"}>Nome: </Paragraph>
                    <XStack space>
                        <Input
                            ref={nameRef}
                            flex={1}
                            size="$5"
                            placeholder="Nome"
                            defaultValue={user.name}
                        />
                    </XStack>
                    <Paragraph color="$gray12" size={"$6"}>Telefone: </Paragraph>
                    <XStack space>
                        <Input
                            ref={phoneRef}
                            flex={1}
                            size="$5"
                            placeholder="Telefone"
                            defaultValue={user.phone}
                        />
                    </XStack>
                    <Paragraph color="$gray12" size={"$6"}>Perfil: </Paragraph>
                    <TextArea
                        ref={perfilRef}
                        size="$5"
                        width={"100%"}
                        height={'auto'}
                        placeholder="Descreva seu perfil..."
                        defaultValue={user.profile}
                    />
                    <Paragraph color="$gray12" size={"$6"}>Experiência: </Paragraph>
                    <TextArea
                        ref={experienceRef}
                        size="$5"
                        flex={1}
                        height={'auto'}
                        width={"100%"}
                        placeholder="Descreva sua experiência..."
                        defaultValue={user.experience}
                    />
                </YStack>
            </Sheet.ScrollView>
        </Sheet.Frame>
    </Sheet>
}

type PhotoPickerProps = {
    open?: boolean;
    onOpenChange?: (isOpen: boolean) => void
    onTakePhoto?: (photo: string) => void
    onPickPhoto?: (photo: string) => void
}

const PhotoPicker = (
    {...props}: PhotoPickerProps
) => {
    const {takePhoto, pickPhoto} = usePhotoGallery();

    const onHidden = React.useCallback(() => {
        if (props.onOpenChange) {
            props.onOpenChange(false);
        }
    }, []);

    const onTakePhoto = React.useCallback(async () => {
        const result = await takePhoto();
        if (props.onTakePhoto && !result.canceled) {
            const uri = result.assets[0].uri;
            props.onTakePhoto(uri);
        }
        onHidden();
    }, []);

    const onPickPhoto = React.useCallback(async () => {
        const result = await pickPhoto();
        if (props.onPickPhoto && !result.canceled) {
            const uri = result.assets[0].uri;
            props.onPickPhoto(uri);
        }
        onHidden();
    }, []);

    return <Sheet open={props.open}
                  snapPointsMode={"fit"}
                  onOpenChange={props.onOpenChange}
    >
        <Sheet.Overlay
            animation="lazy"
            enterStyle={{opacity: 0}}
            exitStyle={{opacity: 0}}
        />
        <Sheet.Handle/>
        <Sheet.Frame>
            <YStack jc={"center"} ai={"center"} pt={"$2"}>
                <Button size="$2"
                        width={"$7"}
                        borderRadius="$6"
                        marginVertical="$2"
                        backgroundColor="$gray4"
                        onPress={onHidden}
                >
                    <ArrowBigDownDash color={'white'} size={'$2'}/>
                </Button>
            </YStack>
            <Separator/>
            <YGroup>
                <YGroup.Item>
                    <ListItem
                        title={<SizableText size={'$5'}>Tirar uma foto</SizableText>}
                        icon={<Camera color={'white'} size={'$2'}/>}
                        ai={"center"}
                        jc={"center"}
                        pressTheme
                        onPress={onTakePhoto}
                    />
                </YGroup.Item>
                <YGroup.Item>
                    <ListItem
                        title={<SizableText size={'$5'}>Escolher na Galeria</SizableText>}
                        icon={<GalleryHorizontal color={'white'} size={'$2'}/>}
                        ai={"center"}
                        jc={"center"}
                        pressTheme
                        onPress={onPickPhoto}
                    />
                </YGroup.Item>
            </YGroup>
        </Sheet.Frame>
    </Sheet>
}

const User = (
    {
        user
    }: UserProps
) => {
    const [editing, setEditing] = React.useState(false);
    const [updatingProfilePhoto, setUpdatingProfilePhoto] = React.useState(false);
    const [updatingCover, setUpdatingCover] = React.useState(false);
    const [tempUser, setTempUser] = React.useState(user);

    console.log('updatingCover', updatingCover)
    console.log('updatingProfilePhoto', updatingProfilePhoto)

    const onPickPhoto = React.useCallback((photo) => {
        if (updatingProfilePhoto) {
            console.log(photo);

            setTempUser({
                ...tempUser,
                avatar: photo
            });
        }
        if (updatingCover) {
            console.log(photo);

            setTempUser({
                ...tempUser,
                coverImage: photo
            });
        }
    }, []);

    const onClosePhotoPicker = React.useCallback(() => {
        setUpdatingProfilePhoto(false);
        setUpdatingCover(false);
    }, [updatingProfilePhoto, updatingCover])

    return <ScrollView p="0" m="0" maxWidth={"100%"}>
        <XStack p="0" m="0" position="relative">
            <Button size="$4"
                    width={"$4"}
                    borderRadius="$2"
                    position="absolute"
                    top="$1"
                    right="$1"
                    zi={10}
                    backgroundColor="#111"
                    onPress={() => setUpdatingCover(true)}
                    opacity={.8}>
                <Camera color={'white'} size={'$2'}/>
            </Button>
            {tempUser && tempUser.coverImage && <Image
                source={{
                    uri: tempUser.coverImage,
                }}
                height={150}
                width={'100%'}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
            />}
            {tempUser && !tempUser.coverImage && <YStack
                height={150}
                width={'100%'}
                backgroundColor={'$blue10'}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
            />}
        </XStack>
        <XStack position="relative" overflow="visible" top="-$3" space="$3" ai="center" jc="center" zi={10}>
            <YStack jc="center" ai="center" position="absolute">
                <Avatar circular size="$9" position="relative">
                    <Button size="$4"
                            width={"$4"}
                            borderRadius="$2"
                            position="absolute"
                            zi={10}
                            backgroundColor="#111"
                            onPress={() => setUpdatingProfilePhoto(true)}
                            opacity={.7}>
                        <Camera color={'white'} size={'$2'}/>
                    </Button>
                    <Avatar.Image
                        accessibilityLabel="Cam"
                        src={tempUser.avatar}
                    />
                    <Avatar.Fallback delayMs={600} backgroundColor="$blue10"/>
                </Avatar>
                <Paragraph size="$8" fontWeight="bold">{tempUser.name}</Paragraph>
                <Paragraph size="$5" color="$gray12">{tempUser.email}</Paragraph>
            </YStack>
        </XStack>
        <XStack height={100}/>
        <YStack p="$2" position="relative">
            <Button size="$3"
                    width={"$3"}
                    borderRadius="$2"
                    position="absolute"
                    zi={10}
                    top={10}
                    right={10}
                    backgroundColor="#111"
                    opacity={.3}
                    onPress={() => setEditing(true)}
            >
                <Pencil color={'white'} size={'$1'}/>
            </Button>
            <XStack space="$3" p="$3" backgroundColor={'$gray4'} ai="center">
                <H3 size="$7" color="$gray12">Telefone</H3>
                <Separator alignSelf="stretch" vertical backgroundColor="$gray12"/>
                <Paragraph size="$5" color="$gray12" textAlign={'justify'}>{tempUser.phone}</Paragraph>
            </XStack>
            <Separator backgroundColor="$gray12"/>
            <YStack space="$3" p="$3" backgroundColor={'$gray4'}>
                <H3 size="$7" color="$gray12">Experiência</H3>
                <Paragraph size="$5" color="$gray12" textAlign={'justify'}>{tempUser.experience}</Paragraph>
            </YStack>
            <Separator backgroundColor="$gray12"/>
            <YStack space="$3" p="$3" backgroundColor={'$gray4'}>
                <H3 size="$7" color="$gray12">Perfil</H3>
                <Paragraph size="$5" color="$gray12" textAlign={'justify'}>{tempUser.profile}</Paragraph>
            </YStack>
        </YStack>
        {editing && <EditPerfil open={editing} user={tempUser} onClose={() => setEditing(false)}/>}
        {(updatingProfilePhoto || updatingCover) && <PhotoPicker
            open={updatingProfilePhoto || updatingCover}
            onOpenChange={onClosePhotoPicker}
            onTakePhoto={onPickPhoto}
            onPickPhoto={onPickPhoto}
        />}
    </ScrollView>
}

export const PerfilScreen = () => {
    const [user, setUser] = React.useState<UserModel>(null);

    React.useEffect(() => {
        async function loadUser() {
            const user = await useUser();
            setUser(user);
        }

        loadUser();
    }, [])

    if (!user) {
        return <></>
    }

    return <Screen>
        <User user={user}/>
    </Screen>
}
